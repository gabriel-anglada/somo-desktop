import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase';
import { Subscription } from 'rxjs/Subscription';
import Promise = firebase.Promise;
import {FirebaseObjectObservable} from "angularfire2/database/firebase_object_observable";
import {AngularFireDatabase} from "angularfire2/database/database";

/*
 Generated class for the Auth provider.

 See https://angular.io/docs/ts/latest/guide/dependency-injection.html
 for more info on providers and Angular 2 DI.
 */
@Injectable()
export class AuthProvider {
    private authState:Observable<firebase.User>;
    private currentAuthUser:firebase.User;
    private currentAuthUserPromise:Promise<firebase.User>;


    constructor(public afAuth:AngularFireAuth, private firebaseDb: AngularFireDatabase) {
        this.authState = afAuth.authState;
        this.loadCurrentAuthUser();
    }

    loadCurrentAuthUser():Promise<any> {
        if (!this.currentAuthUserPromise) {
            this.currentAuthUserPromise = new Promise((resolve) => {
                if (this.currentAuthUser) {
                    resolve(this.currentAuthUser);
                } else {
                    let subscription:Subscription = this.authState.subscribe((authUser:firebase.User) => {
                        subscription.unsubscribe();
                        this.currentAuthUserPromise = null;
                        if(authUser) {
                            this.setCurrentAuthUser(authUser);
                        }
                        resolve(authUser);
                    });
                }
            })
        }
        return new Promise((resolve) => resolve(this.currentAuthUserPromise));
    }

    setCurrentAuthUser(authUser) {
        this.currentAuthUser = authUser;
        firebase.database().ref(`/users/${authUser.uid}`).onDisconnect().update({
            in_chat: false
        });
    }

    getObservableUser():FirebaseObjectObservable<any> {
        return this.firebaseDb.object(`/users/${this.currentAuthUser.uid}`)
    }


    signupUser(email:string, password:string, extraData:any):firebase.Promise<AngularFireAuth> {
        return this.afAuth.auth.createUserWithEmailAndPassword(email, password)
            .then(newUser => {
                this.setCurrentAuthUser(newUser);
                firebase.database().ref('/users').child(newUser.uid).set(extraData);
            });
    }

    loginUser(email:string, password:string):firebase.Promise<AngularFireAuth> {
        return this.afAuth.auth.signInWithEmailAndPassword(email, password)
            .then(user => {
                this.setCurrentAuthUser(user);
                return user;
            });
    }

    isLoggedIn():Promise<boolean> {
        return this.loadCurrentAuthUser().then(user => !!user);
    }

    getAuthId():string {
        return this.afAuth.auth.currentUser ? this.afAuth.auth.currentUser.uid : null;
    }

    getUserProfile():firebase.Promise<any> {
        return this.isLoggedIn()
            .then(value => {
                if(value) {
                    return firebase.database().ref('/users').child(this.currentAuthUser.uid).once('value')
                        .then(snapshot => {
                            return snapshot.val() || {};
                        });
                }
                return null;
            });
    }

    updateProfile(data:any):firebase.Promise<any> {
        if(this.currentAuthUser) {
            return firebase.database().ref('/users').child(this.currentAuthUser.uid).update(data);
        }
    }

    updateEmail(newEmail:string, password:string):firebase.Promise<any> {
        const credential = firebase.auth.EmailAuthProvider.credential(this.currentAuthUser.email, password);

        return this.currentAuthUser.reauthenticateWithCredential(credential)
            .then(() => {
                this.currentAuthUser.updateEmail(newEmail).then(() => {
                    firebase.database().ref('/users').child(this.currentAuthUser.uid).update({email: newEmail});
                });
            });
    }

    updatePassword(newPass:string, oldPassword:string):firebase.Promise<any> {
        const credential = firebase.auth.EmailAuthProvider.credential(this.currentAuthUser.email, oldPassword);

        return this.currentAuthUser.reauthenticateWithCredential(credential)
            .then(() => {
                this.currentAuthUser.updatePassword(newPass);
            });
    }

    resetPassword(email:string):firebase.Promise<void> {
        return this.afAuth.auth.sendPasswordResetEmail(email);
    }

    logoutUser():firebase.Promise<void> {
        firebase.database().ref('/users').child(this.currentAuthUser.uid).onDisconnect().cancel();
        firebase.database().ref('/users').child(this.currentAuthUser.uid).off();
        this.currentAuthUser = null;
        return this.afAuth.auth.signOut();
    }

    deleteUser(password:string):firebase.Promise<void> {
        const credential = firebase.auth.EmailAuthProvider.credential(this.currentAuthUser.email, password);

        return this.currentAuthUser.reauthenticateWithCredential(credential)
            .then(() => {
                return firebase.database().ref('/users').child(this.currentAuthUser.uid).update({
                    deleted: true,
                    deleted_at: Date.now(),
                    old_email: this.currentAuthUser.email,
                    email: null
                });
            })
            .then(() => {
                return this.currentAuthUser.delete();
            });
    }
}

