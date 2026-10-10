/**
 * Decompiled JavaScript representation of Cloudflare Turnstile VM Bytecode
 * Source: disassembly_response2.txt (99 instructions)
 * Challenge ID: a482088fff093c13
 * 
 * Response 2: Challenge Completion & Token Delivery
 */

(function (window) {
    "use strict";

    const chlOpt = window["_cf_chl_opt"] || (window["_cf_chl_opt"] = {});
    const BfdZR2 = window["BfdZR2"];
    const parent = window["parent"];

    const TOKEN = "1.SXMVe1i9fbYjCIodxGYMem4GD57w119zqeJNLDmJwNBVIt9Cxz6NukvR4MsSX2nAfCIUSIj5vBdnANREKpdRFUqMQOMJGNjqgxo4RsYBKUaCkbIZZdcxfp265iHQ1_JWqEbmh_3F8OeD72aoFb85qr45EEbLkxL_gZ0S1frJdHGwoBxJYRTe0P2ljWDvzhp3CbvNLnf18yZK9xIavhOT_jxaO8rnuVR8Ca8U7QhM7QPZNMfmn9LZYig7GhrxpY3uBtCnG0kcMn5Kd7Rv2Id6Tqpdvv7EejSOUfzL2BXBdjbYYxoCJ2sBsD39C9A69g9AlfB4Fb9lAjfymNy3DUd55j2UuMAqly-PqghRUalUdXFw2IGPvx2KcAf27Yu_YsGw6U3_f0oLLocndMc_3pvdBauQVpPiv8_0jjN1LP2tX-xAFB02ncg0ne1O7IJg4-mzTrngMmWsNI8QKuJoQwplyYHVzI2QOJi8RRUtkO42ITZvCc56eZiI66qfX79-vLQm_XQhe0YwXtcy8HuEq3xUTtnj4JCwn2DgCKJBNRq0kc384lPOn98ghpc72PiBkcRdT3bxiXMYQVZGV8hsjS1WKk3tIZWAbuiRcEQrGgmg9Tqvqi22de35gpgjgLKVjuVY_l0s59Zt32E8Zgq_jcCIfRGDQZ8FrXkizWpoGQHztWjzLUWkR65F6gPSvDEv66XqgAuQao7_1iw7CQilWoh4yA.utmozHYereyMGwMYRWxBKw.9fac66e51c68fb67ae6e914b2603dc540d8d216897a91bb2fce791c4a1af3a7e";
    const SCS = "scs.1.uVjgn4ogBs8ncZAO7ZTSKggf4RMK+IwHR9PWNcHl8t3qUP+38xAHsSgMjrec59Xd.uO9Bi+2dDxOb/wDPpwr/pw==.p0XsmLdJkd3Zu/1AOvedS3/0ACVaHjfN+ASNdFH8ZSk=";
    const CHL_ID = "a482088fff093c13";

    /**
     * Closure at 0x00C7
     * Post-expiration cleanup / reset hook
     */
    function onExpirationCleanup() {
        if (BfdZR2) {
            if (typeof BfdZR2["Idud0"] === "function") {
                BfdZR2["Idud0"]();
            }
            if (typeof BfdZR2["OzXf9"] === "function") {
                BfdZR2["OzXf9"]();
            }
        }
    }

    /**
     * Closure at 0x04CC
     * Main completion handler for Challenge Token delivery
     */
    function onChallengeComplete() {
        // Scope variable: scope[0] tracks whether token expiration has been dispatched
        let tokenExpiredDispatched = false;

        /**
         * Closure at 0x0102
         * Token expiration callback
         */
        function onTokenExpired() {
            if (tokenExpiredDispatched) {
                return;
            }

            // Post tokenExpired message to parent window
            parent.postMessage({
                source: "cloudflare-challenge",
                widgetId: chlOpt["tSMA8"],
                event: "tokenExpired",
                token: TOKEN
            }, "*");

            // Schedule post-expiration cleanup after 1 second
            window.setTimeout(onExpirationCleanup, 1000);
        }

        // Set status flags
        window["heZSi1"] = true;
        window["HKLPs9"] = true;

        // Notify challenge internals of completion
        if (BfdZR2) {
            if (typeof BfdZR2["pGgJK8"] === "function") {
                BfdZR2["pGgJK8"]();
            }
            if (typeof BfdZR2["RZEd5"] === "function") {
                BfdZR2["RZEd5"]();
            }
        }

        // Dispatch "complete" event with tokens to parent frame
        parent.postMessage({
            source: "cloudflare-challenge",
            widgetId: chlOpt["tSMA8"],
            event: "complete",
            token: TOKEN,
            scs: SCS,
            chlId: CHL_ID
        }, "*");

        // Schedule token expiration handler
        tokenExpiredDispatched = false;
        const expirationDelay = chlOpt["QpGcn6"];
        window.setTimeout(onTokenExpired, expirationDelay);
    }

    // Register completion hook on window
    window["fHkz0"] = onChallengeComplete;

    // If challenge readiness flag is already active, invoke immediately
    if (window["heZSi1"]) {
        window["fHkz0"]();
    }

})(typeof window !== "undefined" ? window : globalThis);
