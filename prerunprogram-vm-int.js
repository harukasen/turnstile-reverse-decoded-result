/**
 * Decompiled JavaScript representation of Cloudflare Turnstile / Managed Challenge VM Bytecode

 * Target Environment: Browser (Window, Document, WebRTC, WebGPU, BroadcastChannel)
 */

(function () {
    "use strict";

    // Global context references (from VM registers r[112], r[0], r[1], etc.)
    const win = window;
    const doc = document;
    const chlOpt = win._cf_chl_opt || (win._cf_chl_opt = {});

    // State keys used throughout the VM execution
    const STATE_KEY_WEBRTC = "dSkYd9";
    const STATE_KEY_BC = "qYSky6";
    const STATE_KEY_SELECTORS = "GOxN9";
    const STATE_KEY_HOOK_STATUS = "dxLyU0";
    const STATE_KEY_ORIG_PROTOS = "PREJ9";
    const STATE_KEY_BENCHMARK = "atsr5";
    const STATE_KEY_GPU = "igenI1";
    const STATE_KEY_ERROR = "SypY9";

    // =========================================================================
    // 01. Helper Closures (0x009B - 0x083C)
    // =========================================================================

    /**
     * 0x009B - 0x00AE (3 instructions)
     * Custom toJSON serialization hook
     */
    function toJSON_hook() {
        return "dKWN3";
    }

    /**
     * 0x00B0 - 0x00CD (6 instructions)
     * Error / option setter handler
     */
    function setOptionError(err) {
        chlOpt[STATE_KEY_ERROR] = err;
        return undefined;
    }

    /**
     * 0x00CF - 0x01C3 (37 instructions)
     * WebRTC ICE candidate event listener
     */
    function onIceCandidate(event) {
        const state = win.window[STATE_KEY_WEBRTC];
        if (!state) return undefined;

        // If candidate gathering has ended (null or empty candidate)
        if (!event || !event.candidate || !event.candidate.candidate) {
            state["gZzX6"] = true; // gathering complete flag
            return undefined;
        }

        // Record ICE candidate and delta timestamp since WebRTC initialization
        const candidateEntry = {
            "FiSsH3": event.candidate.candidate,
            "MfDC4": Date.now() - state["IkFRZ1"]
        };
        state["JzxX6"].push(candidateEntry);
        return undefined;
    }

    /**
     * 0x01C5 - 0x0205 (10 instructions)
     * WebRTC SDP catch handler
     */
    function onSdpError(err) {
        const state = win.window[STATE_KEY_WEBRTC];
        if (state) {
            state["BCwO5"] = String(err);
        }
        return undefined;
    }

    /**
     * 0x0207 - 0x0279 (13 instructions)
     * WebRTC createOffer success handler
     */
    function onOfferSuccess(offer) {
        const state = win.window[STATE_KEY_WEBRTC];
        if (state) {
            state["SYuh0"] = offer.sdp;
        }
        // Apply local description and attach catch handler
        if (state && state["DMeF8"]) {
            state["DMeF8"].setLocalDescription(offer).catch(onSdpError);
        }
        return undefined;
    }

    /**
     * 0x027B - 0x02BC (10 instructions)
     * WebRTC general catch handler
     */
    function onWebRtcError(err) {
        const state = win.window[STATE_KEY_WEBRTC];
        if (state) {
            state["ZTuBi3"] = String(err);
        }
        return undefined;
    }

    /**
     * 0x02BE - 0x032B (20 instructions)
     * WebRTC cleanup / close timer callback
     */
    function closePeerConnection() {
        try {
            const state = win.window[STATE_KEY_WEBRTC];
            if (state && state["DMeF8"]) {
                state["DMeF8"].close();
                chlOpt[STATE_KEY_WEBRTC] = null;
            }
        } catch (e) {
            // Suppress error
        }
        return undefined;
    }

    /**
     * 0x032D - 0x0458 (34 instructions)
     * Hidden sandboxed iframe generator for native function integrity verification
     */
    function createHiddenIframe() {
        const iframe = doc.createElement("iframe");
        iframe.style.position = "absolute";
        iframe.style.top = "0px";
        iframe.style.left = "0px";
        iframe.style.border = "none";
        iframe.style.visibility = "hidden";
        iframe.sandbox = "allow-same-origin";

        const container = (chlOpt._cf_chl_opt && chlOpt._cf_chl_opt["gNoox7"]) || doc.body || doc.documentElement;
        if (container && container.appendChild) {
            container.appendChild(iframe);
        }
        return iframe;
    }

    /**
     * 0x045A - 0x05A9 (61 instructions)
     * ReDoS & JS engine execution benchmark routine
     */
    function benchmarkRegexTiming() {
        const startTime = Date.now();

        try {
            // Verify eval native string
            const evalStr = win.eval.toString();
            if (!evalStr) {
                // If hooked, trigger evaluation checks
                chlOpt["rPNK4"](evalStr);
            }
        } catch (e) {
            // Handled
        }

        const elapsed = Date.now() - startTime;
        chlOpt[STATE_KEY_BENCHMARK] = elapsed;

        // Schedule delayed continuation
        win.setTimeout(function () {
            // Post-benchmark callback
        }, 550);

        return undefined;
    }

    /**
     * 0x05AB - 0x05BF (5 instructions)
     * Angular testability callback executor
     */
    function angularWhenStable(callback) {
        if (typeof callback === "function") {
            callback();
        }
        return undefined;
    }

    /**
     * 0x05C1 - 0x05E0 (6 instructions)
     * Angular testability getter hook
     */
    function getAngularTestability() {
        return chlOpt["GyZy8"];
    }

    /**
     * 0x05E2 - 0x0683 (19 instructions)
     * Proxy apply trap: intercepts document/element querySelector calls
     * and logs queried selector strings into _cf_chl_opt["GOxN9"]
     */
    function proxyApplyTrap(target, thisArg, argArray) {
        if (argArray && argArray.length > 0) {
            const selector = String(argArray[0]);
            if (!chlOpt[STATE_KEY_SELECTORS]) {
                chlOpt[STATE_KEY_SELECTORS] = [];
            }
            chlOpt[STATE_KEY_SELECTORS].push(selector);
        }
        return Reflect.apply(target, thisArg, argArray);
    }

    /**
     * 0x0685 - 0x06BA (9 instructions)
     * Property access trap getter (tracks property reading into GOxN9)
     */
    function trackedPropertyGetter() {
        if (!chlOpt[STATE_KEY_SELECTORS]) {
            chlOpt[STATE_KEY_SELECTORS] = [];
        }
        chlOpt[STATE_KEY_SELECTORS].push("frameElement");
        return undefined;
    }

    /**
     * 0x06BC - 0x077D (33 instructions)
     * Configures non-enumerable, non-configurable getter traps on target properties
     */
    function attachPropertyTrap(obj, propKey, accessorName) {
        try {
            Object.defineProperty(obj, propKey, {
                get: trackedPropertyGetter,
                configurable: false,
                enumerable: false
            });
        } catch (e) {
            chlOpt[STATE_KEY_HOOK_STATUS] = "GQpe9";
        }
        return undefined;
    }

    /**
     * 0x077F - 0x07C6 (14 instructions)
     * BroadcastChannel pong message handler
     */
    function onBcPongMessage(event) {
        const expectedToken = chlOpt._cf_chl_opt ? chlOpt._cf_chl_opt["KimyV3"] : null;
        if (event && event.data && event.data.pong === expectedToken) {
            // Increment roundtrip handshake counter
            chlOpt[STATE_KEY_BC] = (chlOpt[STATE_KEY_BC] || 0) + 1;
        }
        return undefined;
    }

    /**
     * 0x07C8 - 0x083C (20 instructions)
     * BroadcastChannel ping message handler
     */
    function onBcPingMessage(event, channel) {
        if (event && event.data && event.data.ping) {
            if (channel && channel.postMessage) {
                channel.postMessage({ pong: event.data.ping });
            }
            chlOpt[STATE_KEY_BC] = (chlOpt[STATE_KEY_BC] || 0) + 1;
        }
        return undefined;
    }

    /**
     * 0x083E - 0x09AB (44 instructions)
     * BroadcastChannel & cross-context communication runner
     */
    function initBroadcastChannel() {
        // Validate internal feature flags
        if (chlOpt.BfdZR2 && chlOpt.BfdZR2.eOix4("nbaT1")) {
            chlOpt[STATE_KEY_BC] = "sJxJ8";
            return undefined;
        }

        if (!win.BroadcastChannel) {
            chlOpt[STATE_KEY_BC] = "glXmA6";
            return undefined;
        }

        const token = chlOpt._cf_chl_opt ? chlOpt._cf_chl_opt["KimyV3"] : undefined;
        const channel = new win.BroadcastChannel("a");

        channel.addEventListener("message", onBcPongMessage);
        channel.addEventListener("message", function (e) {
            onBcPingMessage(e, channel);
        });

        channel.postMessage({ ping: token });
        return undefined;
    }

    // =========================================================================
    // 02. Main Challenge Orchestrator (0x09AD - 0x160A, 377 instructions)
    // =========================================================================

    function mainOrchestrator() {
        // --- Step 1: XOR Encryption Helper Synthesis (0x0A67 - 0x0B65) ---
        // Dynamically defines the string XOR decipher routine via eval
        const decryptorCode = "function ulgk5(s){return function(k){for(var o=new Uint8Array(k.length),i=0;i<k.length;i++)o[i]=k[i]^s.charCodeAt(i%s.length);return o}}";
        win.eval(decryptorCode);

        // Initialize decipher function with static key
        if (typeof win.ulgk5 === "function") {
            chlOpt["ULcl2"] = win.ulgk5("gMSbwOXgRQvbSbxg");
        }

        // --- Step 2: JSON Serialization Fingerprint (0x0B69 - 0x0BB7) ---
        if (!chlOpt._cf_chl_opt) {
            chlOpt._cf_chl_opt = {};
        }
        chlOpt._cf_chl_opt["yaqE6"] = {
            "WIdBV6": "rtTzZ6",
            "toJSON": toJSON_hook
        };

        // --- Step 3: WebGPU Environment Inspection (0x0BBB - 0x0CC3) ---
        try {
            if (win.navigator && win.navigator.gpu && !chlOpt[STATE_KEY_GPU]) {
                if (!(chlOpt.BfdZR2 && chlOpt.BfdZR2.eOix4("liNgi8"))) {
                    chlOpt[STATE_KEY_GPU] = win.navigator.gpu.requestAdapter();
                    if (chlOpt[STATE_KEY_GPU] && chlOpt[STATE_KEY_GPU].catch) {
                        chlOpt[STATE_KEY_GPU].catch(setOptionError);
                    }
                }
            }
        } catch (err) {
            chlOpt[STATE_KEY_ERROR] = err;
        }

        // --- Step 4: WebRTC STUN Fingerprint & Candidate Harvesting (0x0CC3 - 0x104B) ---
        try {
            const hasRtc = !!(win.RTCPeerConnection && (!chlOpt.BfdZR2 || !chlOpt.BfdZR2.eOix4("EJWUH3")));
            if (hasRtc && !win.window[STATE_KEY_WEBRTC]) {
                const rtcConfig = {
                    iceCandidatePoolSize: 0,
                    iceServers: [
                        { urls: "stun:stun.cloudflare.com:3478" },
                        { urls: "stun:stun.l.google.com:19302" },
                        { urls: "stun:stun1.l.google.com:19302" }
                    ]
                };

                const pc = new win.RTCPeerConnection(rtcConfig);
                const rtcState = {
                    "DMeF8": pc,
                    "JzxX6": [],
                    "IkFRZ1": Date.now(),
                    "SYuh0": null,
                    "iKAh8": false,
                    "gZzX6": false,
                    "zYtg4": null,
                    "ZTuBi3": null,
                    "BCwO5": null
                };
                win.window[STATE_KEY_WEBRTC] = rtcState;

                // Test data channel creation
                try {
                    pc.createDataChannel("");
                    rtcState["iKAh8"] = true;
                } catch (dcErr) {
                    rtcState["zYtg4"] = String(dcErr);
                }

                // Attach candidate listener
                pc.addEventListener("icecandidate", onIceCandidate);

                // Create SDP offer
                pc.createOffer({
                    offerToReceiveAudio: true,
                    offerToReceiveVideo: true
                })
                .then(onOfferSuccess)
                .catch(onWebRtcError);

                // 5-second connection watchdog
                win.setTimeout(closePeerConnection, 5000);
            }
        } catch (rtcErr) {
            // WebRTC setup failed
        }

        // --- Step 5: Iframe Eval Integrity Verification (0x1050 - 0x110C) ---
        try {
            const nativeEvalToString = win.eval.toString();
            const iframe = createHiddenIframe();
            if (iframe && iframe.contentWindow) {
                const cleanEvalToString = iframe.contentWindow.eval.toString();
                // Compare native eval toString with fresh iframe's eval toString
                const isEvalTampered = (nativeEvalToString !== cleanEvalToString);
                chlOpt["eval_tampered"] = isEvalTampered;
                iframe.remove();
            }
        } catch (e) {
            // Handled
        }

        // --- Step 6: Regex Timing Benchmark (0x1110 - 0x11AC) ---
        // Generates large string of spaces followed by regex test pattern
        const testPayload = " ".repeat(1337331) + "0, /.*honk.*/, ";
        benchmarkRegexTiming();

        // --- Step 7: Angular Testability Mock Injection (0x11EF - 0x1268) ---
        const fakeTestability = {
            whenStable: angularWhenStable
        };
        const fakeAngular = {};
        Object.defineProperty(fakeAngular, "getTestability", {
            get: getAngularTestability,
            configurable: true
        });
        chlOpt["angular"] = fakeAngular;

        // --- Step 8: DOM Query Proxy Traps (0x12B2 - 0x1404) ---
        if (!chlOpt[STATE_KEY_SELECTORS]) {
            chlOpt[STATE_KEY_SELECTORS] = [];
        }
        if (!chlOpt[STATE_KEY_HOOK_STATUS]) {
            chlOpt[STATE_KEY_HOOK_STATUS] = "lJuE4";
        }

        // Store original prototype functions
        chlOpt[STATE_KEY_ORIG_PROTOS] = [
            Document.prototype.querySelector,
            Document.prototype.querySelectorAll,
            Element.prototype.querySelector,
            Element.prototype.querySelectorAll
        ];

        // Wrap DOM querying methods with Proxy to detect automated scrapers
        const proxyHandler = { apply: proxyApplyTrap };
        Document.prototype.querySelector = new Proxy(Document.prototype.querySelector, proxyHandler);
        Document.prototype.querySelectorAll = new Proxy(Document.prototype.querySelectorAll, proxyHandler);
        Element.prototype.querySelector = new Proxy(Element.prototype.querySelector, proxyHandler);
        Element.prototype.querySelectorAll = new Proxy(Element.prototype.querySelectorAll, proxyHandler);

        // --- Step 9: Window Property Trap Enumeration (0x1447 - 0x1556) ---
        const trapsToCheck = {
            window: ["frameElement"]
        };
        const keys = Object.keys(trapsToCheck);
        for (let i = 0; i < keys.length; i++) {
            const targetName = String(keys[i]);
            const targetObj = win[targetName];
            const propList = trapsToCheck[targetName];
            if (targetObj && propList) {
                for (let j = 0; j < propList.length; j++) {
                    attachPropertyTrap(targetObj, propList[j], propList[j]);
                }
            }
        }

        // --- Step 10: BroadcastChannel Handshake (0x1595 - 0x15C8) ---
        try {
            initBroadcastChannel();
        } catch (bcErr) {
            chlOpt[STATE_KEY_BC] = "LTqo0";
        }

        return undefined;
    }

    // =========================================================================
    // 03. Entry Point Execution (0x0000 - 0x0096, 0x160C)
    // =========================================================================
    
    // The top-level bytecode creates the main closure and executes it
    return mainOrchestrator();
})();

