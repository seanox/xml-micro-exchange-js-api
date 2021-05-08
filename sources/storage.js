/**
 * LIZENZBEDINGUNGEN - Seanox Software Solutions ist ein Open-Source-Projekt, im
 * Folgenden Seanox Software Solutions oder kurz Seanox genannt.
 * Diese Software unterliegt der Version 2 der Apache License.
 *
 * XMEX XML-Micro-Exchange JS API
 * Copyright (C) 2021 Seanox Software Solutions
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not
 * use this file except in compliance with the License. You may obtain a copy of
 * the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the
 * License for the specific language governing permissions and limitations under
 * the License.
 *
 * Storage 0.0.1 20210000
 * Copyright (C) 2021 Seanox Software Solutions
 * All rights reserved.
 *
 * @author  Seanox Software Solutions
 * @version 0.0.1 20210000
 */

if (typeof Object.exists === undefined) {
    Object.exists = function(object) {
        return object !== undefined && object !== null
    }
}

// TODO:
class Storage {

    /**
     * TODO:
     * @param meta object {datasource, storage, root}
     *     datasource and storage are required, root is optional
     */
    static connect(meta) {
        if (typeof meta !== "object")
            new Error("Invalid meta object")
        const request = new XMLHttpRequest()
        request.open("OPTIONS", meta.datasource, false)
        let storage = String(meta.storage)
        if (Object.exists(meta.root))
            storage += " " + meta.root
        request.setRequestHeader("Storage", storage);
        request.send();
        if (request.status !== 201
                && request.status !== 204) {
            // TODO: Error, if response with message, then Error(message)
        }
        return {

            /**
             * TODO:
             * @param xpath
             * @param asynchronous
             */
            options: (xpath, asynchronous = false) => {
                // TODO:
            },

            /**
             * TODO:
             * @param xpath
             * @param payload
             * @param asynchronous
             */
            put: (xpath, payload, asynchronous = false) => {
                // TODO:
            },

            /**
             * TODO:
             * @param xpath
             * @param payload
             * @param asynchronous
             */
            patch: (xpath, payload, asynchronous = false) => {
                // TODO:
            },

            /**
             * TODO:
             * @param xpath
             * @param asynchronous
             */
            get: (xpath, asynchronous = false) => {
                // TODO:
            },

            /**
             * TODO:
             * @param xpath
             * @param template
             * @param asynchronous
             */
            post: (xpath, template, asynchronous = false) => {
                // TODO:
            },

            /**
             * TODO:
             * @param xpath
             * @param asynchronous
             */
            delete: (xpath, asynchronous = false) => {
                // TODO:
            }
        }
    }
}

// TODO:
class StorageObserver {

    /**
     * TODO:
     * @param storage
     */
    static connect(storage) {
        // TODO:
    }

    /**
     * TODO:
     * @param xpath
     * @param callback
     */
    static observe(xpath, callback) {
        // TODO:
    }

    /** TODO: */
    static diconnect() {
        // TODO:
    }
}