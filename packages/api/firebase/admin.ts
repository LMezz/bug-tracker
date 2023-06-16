import admin from "firebase-admin"
import { App, initializeApp } from "firebase-admin/app"
import { getAuth } from "firebase-admin/auth"

import serviceAccount from "./service-account-key.json"

const app: App = initializeApp({
    credential: admin.credential.cert(serviceAccount as admin.ServiceAccount),
})

export const auth = getAuth(app)
