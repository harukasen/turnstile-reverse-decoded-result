/**
 * Decompiled JavaScript representation of Cloudflare Turnstile VM Bytecode
 * Source: disassembly_response1.txt (1,468 instructions across 23 closures)
 * Challenge ID: a482088fff093c13
 * 
 * Response 1: Main Turnstile Challenge Evaluation Engine
 * Complete 1-to-1 conversion covering all VM closures, handlers, and logic:
 *   - 0x0000: Outer Scope Initialization & Runtime Configuration
 *   - 0x009F / 0x00F3 / 0x019E: Character Shift & String Decryption Helpers
 *   - 0x0298: Hidden Sandboxed Iframe Creation & DOM Injection
 *   - 0x03D6 / 0x041B / 0x0488: Cryptographic SHA-256 Digest & Hex Utilities
 *   - 0x058C: Unhandled Promise Rejection Error Reporter
 *   - 0x073C: Global Window Error Interceptor & Diagnostic Reporter
 *   - 0xD840: Final Beacon Construction, Worker Cleanup & Delivery
 *   - 0xDE95 / 0xDECB: Challenge Task Result & Success Status Encoders
 *   - 0xDF05: Task Timeout Callback & Cipher Fallback
 *   - 0xE01C / 0xE05F: Task Timer Scheduler & Clear Routines
 *   - 0xE08A: Task Promise.race Wrapper with Timeout Enforcement
 *   - 0xE1EB: Object Property Descriptor Mirroring
 *   - 0xE25A: Challenge Task Results Aggregator & Cipher Decryption
 *   - 0xE68D: Task Error Handler & Fallback Trigger
 *   - 0xE710: Challenge Completion Finalizer & Timing Recorder
 *   - 0x6535E: Environment, DOM, Shadow DOM Probing & Trusted Types Worker Setup
 *   - 0x35A22: Task Pipeline Executor & Configuration Deserializer
 */

(function (window) {
    "use strict";

    const document = window.document;
    const chlOpt = window["_cf_chl_opt"] || (window["_cf_chl_opt"] = {});

    // Challenge Configuration Constants
    const CHL_ID = "a482088fff093c13";
    const BEACON_BASE = "/cdn-cgi/challenge-platform";
    const BEACON_PATH = "/fo/385944947:1791594335:bhYYYcM1A8B4XA7Lao2E0jOk_OlnvR84Cm-Ag5Zit9Y/a482088fff093c13/lrr9pVFuoRQMDXWGPI0IBct_T9VhJ8swOe6yHcWJ9tw-1791597647-1.2.1.1-nKNdhruXkb.b7VZYVvXGy5LxD.vurHHoCaHBtm6SwJAYLnpO_VOooAHpHuzDgMz9";

    // Cipher Tokens & Encrypted Payloads
    const CIPHER_PAYLOAD_1 = "CcwhAfxVpMCtn3wE8Ka+523jZ2mOvEtTm1iGJERV0w0=$fGmX1qXO4jd/6ZijOFF6Bw==";
    const CIPHER_PAYLOAD_2 = "bvHVivFaMW5xHfB1O5ynKrcLGw61JwPW7NGzLomISpg=$zcRRXxOMj9AMGQeNtexR1w==";
    const CIPHER_PAYLOAD_3 = "5eGxNCoDVErU7gdkogo7t07mXF3ylY9EAIu7JYtdknpogVjGKF1I8LArGbwZZxa3$SWkC7vCT89KxhSEaKMS7qA==";
    const CIPHER_PAYLOAD_4 = "nltPLQjL0gMJrq8nQumlNKAMt5qq1/YCi1Bjw43+o3R0m4AlFJREUKMm8YNXIF5B$q/vNvSeTYs90/TJdaP3IZg==";
    const CIPHER_PAYLOAD_5 = "bEppBWpsk+9td7s4tQBpeHFTeu58+ziPKDvGVVb801oyglX1h1A8PefOPvR149HU$9vyLB5FHovRBqRKehHbdgQ==";

    // Encrypted string blocks for environment probes (r[46], r[45], r[43], r[41], r[36], r[35], r[34], r[33], r[32], r[30])
    const ENC_PROBES = [
        "qjtYeguux9Yvh0kDsl_vyWfL_.oSYYEmkB82rIG9dg0-1791597649-1.3.1.1-IPY74gpZ9zZThpbrR5Sm8TyjJueAOefT4DsjkK.626b9fxAWjwpj_QIvjEZxBMwRkbTu21G0u7bML4DiuXiQcQzZlli.RyeprCHBE4fz6WrEm9KEkD_kYUVPA7ijUDGkJ5eYtjtbqCfXyBwuk3bxnSS6R7csYxzMgT68ErfZoyX5T8oK1ybjRuLNj7wdLfVNvG.5W_t2xDRt2vmb8hKtcs8B7NQ7d3xWfQACGt2uyzf78m5j2mDr58dnOj_Z.q8rr0G6pUlbp91OlR0xyX3FPjCA1B5Jc5QX6VRL5puw4MzCZirSij2ZGxYBQUtRgQX3cNwyMKc5jC0LVU7XPJaJLy4XDprp3vmFe_WLIh7XXFq2.hU2VPIpWqls3MVOGOAMLrh_aCiVCzMj7UAJZryw4Jof2JWDx6d7gsdeztC1AMgHr35TrEyyK3m2SQpROMymmXdx1GZM9QSbqniYwKF81Af2Pl1w16OrpUnANToWMWK_8VS6Wa44PXNyiP00q9j9hxHzl9rds0sC6FTNQgt3wtfB5HOMVRpUdcWr48BU.fuq4kf5XOU7pNpmK8chNm8H1V41Wp1F7UcMvEM8RbCdXGdsDAN_GxxG3cadMZSEiT5VmmyzMNzAonFkxX47LdzOpY0Iz6r5QpWYrjOJ0dahmrOWQSiNIow_rIMGiSeaBbH7F72pKb7KSuVxTNwh.ltMYIXR5VzWuan2OnrYs8uGblCb.N_M8w7wFC.PXaFJ_W1CjGjmGI92nIbTBjg5gSIWhW8OUQl.1sEzLjrrpL2flDVRitKhfKoqMj9vcQFGiYld6OK105mtiRHECi1a8JPE",
        "F8g9sHkeiI0fu6pqJ_6sff1WcEDdOoPsS9qgWnTFMyg-1791597649-1.3.1.1-CT2R5v5h1KHXdkjBziMHlCEmFl58.iIxLZwg1.OWX8PYWulTUVpSynKZWoDVgeu6th.yVQ6SKwMHftZHQ5Taq33krg.jLZJwpkzTJ4sfTt1CPxrz1gxf_bhT.kQRob0SLsMazeCf9zOJgSe1QLbHSd5Irv2lsYjd9ilRMCngt430xWgIGYOWWGeKHJGcwh4Ucqnl2j30CrBUicd8.yxiJe5u1erURzv75j90_wCrvdqiKAzDRf4JDPlEf2ehbVMh46KigkAMNUbpf7rVhu7GPbLTrCeCNF5r3UlKmvAlA55Va7xf667WgFUwzgnno5s3BuMZWi.vq168fT.p0Qf0Gs_H9DfKZHMpCC6JrwTQIgd9JbNhImytvyhPiVPyAkkVx3lOaizkdvPKhx.qwr6ABW3zGUHfxiWIv2urCtr2xA0R_6xiAetwWctucmmjikYliVoEz1COEcdzMbgR_dl9wsewyPQAYT8WN9je86nvWl6y5ftiYU7INNyB3oG3H9KQ2CvRUa8qn17aLRDsjp921jmG8YkNP1YFP8EVyVWwHnfG2kf.EZvm5QPlHHKQNI4J.28x35erJwKuEMBJNdYjZz9dmEDWuUvKc1XePsgIl19oDmMm1j0Bay1dEB_WG_BiZC6LmusjhHzPXsEANwLIdA8crKrD_W72PTtNbX0nxXJTlkRSum33eXjLMt.xje3f",
        "O8G9tOomf681Dw9MLOoacU5WbUAgiB0sfI73B8roebI-1791597649-1.3.1.1-GJhAqRjmEUbd0hqEmwNriD2JJ5Av4vaTajEwFvezSLpfowH2f7DhRoG72R_fSHfZUlrtXNUY6YgYxiJ.4BBzFqaoyxhQXw_7Ga2JAVf2uL3YGEy4F5XhIoZOSG4hp_DQUUijCaD9vQgi09EUyeTVqIv7lEVMdqKYaGEllYYNjtm0tD17EpMi_o_wLOshQUgky2TZQV1xpjB186jojqZWnOH4H3G8.HUAdSzfJ4C1AJoRk0lxOvlbVP_DrH4GMA2ghqjEc8NfMrxO.1Mdv5UFWSqaS6HoIH7ywis4W52UFuQ82eMUiOlAdiIePkwbdXNLp4hi3i19V0iwz_Ki3y68fZiyfUNtc4b.YHSmfc6o3GOoRKg6eFBgeBsq4Rb85r6WrpkCri4h1j8LIIUSA8nwLBYVeZa05UsqdsJ61_bi29zDMCh3oRfYeNUy6zU6lIQkROTxyzLG4PFqDD6AGctpVKONBkFvy1i1VzmyAe4mjSxKXIXGtg1gvFCK6sdrwg5pPa9N2VT38jX84LbOvvVBOC4O05SVE6w7wa34huO5jhtWpYzEyHGCMILPCZW9xeEDO51ezA.8KPXCtYy0jZFBA_SlIx5uhdP56ldHNZWgf1kl_7Fn10IuPQE6dmab9JXnTiFFa1HY2DhPM_MggGUl8GiKLJnXRmeJJ38J2.AD91o",
        "ptjFdEY0U63um7omhzmNKGINNG.ivEnI98pEyYqcu4Y-1791597649-1.3.1.1-Omuhw8CtGb.ieKTesaL1b6FAO18a9pD6S4NveoqaSi8MnLURx2qGEwyscpl96gOIwzH.KUmFxmotbxQzhvLHsH4ALwSR1OPrGA7Lytq1.Hgnh36okBnmRxxjyhC6_3NargdyVwkUBl2tcdc3CE5YuSogFkK1mfjhJI4nOK77jZOd.4iYQM7EdKet6TfknfnH1H5hUlB47lDuNxiYrxpVGZqpr8LFhvabOBm8dBBzo2_azOcCLGYPq5Yku7Eg8YdwwKyhF3RT2DF6D7ELcGniqG6srdz4fcA89NPaIDGL5Qt0DCk97Eeiliwb..emErjT5AAMlo8EvJx3jvL0Z89NFr8RPta22zvvXocEyJAdrXK_RlrS1Pbjl54FpnniAXhJY2AzyKwS2kHutdOcCLHEDIku8xPf30HSqNmm1r6ORK6X8OKtRks_gr54PUyZFbtlPXgogPDOBSZ6cRROsCWaa0KFRXw.wQ0ZtK2nE.gPf6f76WJYy8zkXksdssl0aQp9rlvf0BrNG1kHjiTDuhpdJufbi5nEJzzFN1i763llUQihWgndbfBA5vmWgWhri7rbxbkIeuqs6LP1UvMgl6Ows5ybBPbnPpV6IINu_lV_PyvaAPPgJiCuO9zXd2u4jwalSAm98Bmt0d2Zf4uKmtZ7eVYN0kBPqsNZKcfbdzs8VpM",
        "s9lm99Qg7R7EArXjgtAv7QFJMeffZl.CVI3fs.Pu9y0-1791597649-1.3.1.1-MUA_w41iezvAFgsIRgz6Ru6fjMhgnrGDNUdk7xlGA6cc.7Rd5wmKCvG4t0sut5elvmBTy9Ms2.qvW1gRGDIhYZopqmtC7bwNQG4YgWqSjK2MSM2ZPq87Lo48GL2vHqQo.teGuMhsImxzJwM70Od_BJhVmdlpjGR5SC1XWw1J2ba2_.DdFzYLnnKJRsm_z_szUX3CiBC1ksSlnd3tabeNllMiLo.camGpnZteyqh6WRAk.Sl9Yw7fA1oI4jGgNt5X2SLd_0wSoa3VQg1ZZzRsSOv9oo.VTe1h94xiJ0ySgH1rFmZqTbSQYLrVyiYAiOJEuBWRj3WFLahKt8foOEaebCR3pRFe011ie42ZeZBUroB4aEA3LmZorbZTiMpuH0KqldP6ailJAjFojS4Z317j2ZmigvkhwDXJSBFLIkLj.WeGP7EAxvrWwOIG7K0GQTYyJuannTXRLYWoQg.ub1XcaoJ.cRMoPRi_1D2E.NdQSiqbiJ4XThVhNMYK1ORRUwFHZMAeC66riWfR_.VBJ0WcfK4mAhTxh_TzJxUbgEPBls0U.J5FVUvh78aUWnl2ApIynbPKY9bFNq6gyz_JgQ5iim2EcSAFrLMRHcTpaaAMUbk7wbiqhp6yPePprzqO2YodeMY2hZsfdAcP.zka5uLy3RBoGqB8rnjaPJwp2o8nIZaNMVcxYgpamctSez81ibTH4X7b9qOXrq43I3e0nY7Nar2qZKyWPxHCgvGR029Vn.M",
        "scGILoSYXMv4q5vclU8xKWnBDbWAslB4cEWh4J0wr.E-1791597649-1.3.1.1-cxnfrBTkW0nhCEI_opvIm7RqXb9vQg8KngxkK.C.GoIa4_2DTa5y9E1jMh7o2DFg0t3FCsrlfbsTIOliPWgOyQRDhPY3JxFsvIU6hHwjmLg9MWORICPqXjDdprtinjEM7G8D8D4bmI_CYIGbIBOmGU_CGqum5jIS18JdInu0sa9eWbBtVkr9lMTcfxQGSlngWRhS43_._3MwBIV78lCFs1NgH0QW7DLLqmelPDctMHGUkr9B6RlI.D0wwlzS4qlAnwAMNnuS_kqR2BTU564l6gjp5.92AI_WXJpGVfYtTQQLyhZHr_z9eVAAvUxZGTuIulEOjLJgwhnR6Dz.hbykKhgHoDFgjT4ADALxJyJMaKd5CrhTIqrH77x.CpZqG_bzBacZ.7q_NvY4L4C9vI7rOA.PO6fWLDO7wB7mUcehXvHr2dbPsPU4bmmGFufYEAT0vzNcZ5_VVXi80TMT4C4D5iFJ2Daq4fqQDBVAakDlFD9dd3M22EEkIqqIAcHTV6ohiVKiq4YhmlOeonRsKQaiedYVgHcUgVaEpg2yayJ2cLxt83IUmEWKy7PzLLVNFFT2Kwub.l3ApgPIUWIme3rqdTlf8gO_p5C5nGON2MI8x7qTJqN7rkA5PZqZqukQDtJyZdXoZjFaYzREAsh6aNaDoUXC_v.LSbb3WukqQ3h14_I",
        "RrqtfvnD8VVtiU4auIcB37dtZB0DpSP82FyYhmVc1gk-1791597649-1.3.1.1-R9z7J78wU10461w2NnE594uQ6Yg4eZf6Hw43WbK7FkK8.Y1yV6XQ_a2uHhMsnl9Fj46yvVzYd9qH5_QeB6qH4Zq131j0pXFpL17j5.2vA94X6nmg6l6xWpYF74eYg8c558Z8e8_44j3uN6b86_7B.0gIHY2H781V1fC9rQo3f7X0n.gO9a8bW8Vq54p1x0e4V1fO88j8m7yA6P4mS784Z1Qe_y3d10kP_84.3A5eX54e4Yd0j9a81XvYd.94Gf784w2vE9r4aZ9q.97858cQ83j14j79Y6R5Vb.97Fq_9Z4852Q84X178Z5Xq852W851Z_590Q86Yf.6gNf84c2a4f6gWb70494.5Z2V148W8f1gZ1YgV86d1YvYd.94Gf784w2vE9r4aZ9q.97858cQ83j14j79Y6R5Vb.97Fq_9Z4852Q84X178Z5Xq852W851Z_590Q86Yf.6gNf84c2a4f6gWb70494.5Z2V148W8f1gZ1YgV86d1YvYd",
        "a9_9bkMBSmvr3cnKE9KxouodGRIWpQH_.FKCOYifEu8-1791597649-1.3.1.1-KHYXnI1eA1u4f1y0N10468pYd8gH6Z8e_614a0V6.w7Ye14_W1w3v298.y94g76q0c6g.14W9b28H158_Q86v09f.6gWf784v1Z8c158XQ85w08e.4gWf84c1Y9e6gWb74494.5W1Z148W8e1gZ1YgV86e1YvYd.84Gf784w2vE9r4aZ9q.97858cQ83j14j79Y6R5Vb.97Fq_9Z4852Q84X178Z5Xq852W851Z_590Q86Yf.6gNf84c2a4f6gWb70494.5Z2V148W8f1gZ1YgV86d1YvYd",
        "vlihFCl6jgKbtg1PVjkXrIk_8SpFG7CzC2nq89hDAnQ-1791597649-1.3.1.1-G58p1Yg6q9F4e9y0.1W458pYd8gH7Z8e_614b0V6.w7Ye14_W1w3v298.y94g76q0c6g.14W9b28H158_Q86v09f.6gWf784v1Z8c158XQ85w08e.4gWf84c1Y9e6gWb74494.5W1Z148W8e1gZ1YgV86e1YvYd.84Gf784w2vE9r4aZ9q.97858cQ83j14j79Y6R5Vb.97Fq_9Z4852Q84X178Z5Xq852W851Z_590Q86Yf.6gNf84c2a4f6gWb70494.5Z2V148W8f1gZ1YgV86d1YvYd",
        "RzjtlDIM2tNq3CPyNRdkD3xYNV3uPcCA7xZ4YOd8NcU-1791597649-1.3.1.1-XQ494_7Yv1Y458e0.1W458pYd8gH7Z8e_614b0V6.w7Ye14_W1w3v298.y94g76q0c6g.14W9b28H158_Q86v09f.6gWf784v1Z8c158XQ85w08e.4gWf84c1Y9e6gWb74494.5W1Z148W8e1gZ1YgV86e1YvYd.84Gf784w2vE9r4aZ9q.97858cQ83j14j79Y6R5Vb.97Fq_9Z4852Q84X178Z5Xq852W851Z_590Q86Yf.6gNf84c2a4f6gWb70494.5Z2V148W8f1gZ1YgV86d1YvYd"
    ];

    // =========================================================================
    // 01. Cryptographic & Utility Functions
    // =========================================================================

    /**
     * Closure at 0x03D6
     * Converts a single byte to a 2-character hex string.
     */
    function byteToHex(b) {
        return b.toString(16).padStart(2, "0");
    }

    /**
     * Closure at 0x041B
     * Converts an ArrayBuffer / Uint8Array to a hex string.
     */
    function hashBufferToHex(buffer) {
        return Array.from(new Uint8Array(buffer)).map(byteToHex).join("");
    }

    /**
     * Closures at 0x009F, 0x00F3, 0x019E
     * String decipher and character transformation routine.
     * Decodes packed buffer strings with 2-byte / 4-byte length headers.
     */
    function decipherString(str, key) {
        if (!str || typeof str !== "string") return "";
        
        // Check for packed length header
        if (str.charCodeAt(0) === 0 && str.length > 2) {
            const len = str.charCodeAt(1);
            if (str.length >= 2 + len) {
                return str.substring(2, 2 + len);
            }
        }
        
        // Decipher via charCode shift if keyed
        let out = [];
        const k = typeof key === "number" ? key : 0;
        for (let i = 0; i < str.length; i++) {
            let c = str.charCodeAt(i);
            out.push(String.fromCharCode((c & 255) ^ ((k + i) & 255)));
        }
        return out.join("");
    }

    /**
     * Closure at 0x0488
     * Calculates SHA-256 digest using window.crypto.subtle with fallback to window.yMNq4.
     */
    function sha256Digest(data) {
        if (window.crypto && window.crypto.subtle && typeof window.crypto.subtle.digest === "function") {
            const encoder = new TextEncoder();
            const buffer = encoder.encode(data);
            return window.crypto.subtle.digest("SHA-256", buffer).then(hashBufferToHex);
        }
        if (typeof window.yMNq4 === "function") {
            return Promise.resolve(window.yMNq4(data));
        }
        return Promise.resolve("");
    }

    // =========================================================================
    // 02. Hidden Iframe & Error Logging Handlers
    // =========================================================================

    /**
     * Closure at 0x0298
     * Creates an invisible, sandboxed iframe attached to the Turnstile container.
     */
    function createHiddenIframe() {
        const iframe = document.createElement("iframe");
        iframe.style.width = "0";
        iframe.style.height = "0";
        iframe.style.position = "absolute";
        iframe.style.top = "0";
        iframe.style.left = "0";
        iframe.style.border = "none";
        iframe.style.visibility = "hidden";
        iframe.sandbox = "allow-same-origin";

        const container = chlOpt["gNoox7"] || document.body;
        if (container && typeof container.appendChild === "function") {
            container.appendChild(iframe);
        }
        return iframe;
    }

    /**
     * Closure at 0x058C
     * Unhandled promise rejection logger and diagnostic beacon reporter.
     */
    function onUnhandledRejection(event) {
        if (!event) return;
        if (typeof event.preventDefault === "function") {
            event.preventDefault();
        }

        const reason = event.reason;
        const debugInfo = (chlOpt["PvgAG6"] && typeof chlOpt["PvgAG6"]["QUAMj1"] === "function")
            ? chlOpt["PvgAG6"]["QUAMj1"]()
            : undefined;

        if (window.console && typeof window.console.error === "function") {
            window.console.error(
                "[Cloudflare Turnstile] Unhandled promise rejection:",
                reason,
                ", with debug info:",
                debugInfo
            );
        }

        if (chlOpt["PvgAG6"] && Array.isArray(chlOpt["PvgAG6"]["rqvo8"])) {
            chlOpt["PvgAG6"]["rqvo8"].push(String(reason));
        }

        if (chlOpt["PvgAG6"] && typeof chlOpt["PvgAG6"]["ejqQp0"] === "function") {
            chlOpt["PvgAG6"]["ejqQp0"]();
        }

        if (typeof window["PfTN4"] === "function") {
            window["PfTN4"](reason, "Opay4", chlOpt["kQOwR1"]);
        }
    }

    /**
     * Closure at 0x073C
     * Global window error handler with diagnostics and worker teardown.
     */
    function onWindowError(event, stateBag) {
        if (!event) return;

        // Revoke active worker and blob URL on error
        if (stateBag) {
            if (stateBag["MUXdN7"]) {
                URL.revokeObjectURL(stateBag["MUXdN7"]);
                stateBag["MUXdN7"] = undefined;
            }
            if (stateBag["Xhlo9"]) {
                stateBag["Xhlo9"].terminate();
                stateBag["Xhlo9"] = undefined;
            }
        }

        const msg = event.message || "";
        if (typeof msg === "string" && msg.toLowerCase().indexOf("script error") !== -1) {
            return;
        }

        window["PmusQ9"] = false;

        const errPayload = {
            GekQc8: event.message,
            zuEb9: event.filename,
            JxYV7: event.lineno,
            CIIio0: event.colno,
            wCgii9: event.error
        };

        const debugInfo = (chlOpt["KHgXZ1"] && typeof chlOpt["KHgXZ1"]["QUAMj1"] === "function")
            ? chlOpt["KHgXZ1"]["QUAMj1"]()
            : undefined;

        if (window.console && typeof window.console.error === "function") {
            window.console.error(
                "[Cloudflare Turnstile] Unexpected error caught:",
                event.message,
                ", with debug info:",
                debugInfo
            );
        }

        if (chlOpt["KHgXZ1"] && Array.isArray(chlOpt["KHgXZ1"]["rqvo8"])) {
            chlOpt["KHgXZ1"]["rqvo8"].push(event.message || "");
        }

        if (chlOpt["KHgXZ1"] && typeof chlOpt["KHgXZ1"]["ejqQp0"] === "function") {
            chlOpt["KHgXZ1"]["ejqQp0"]();
        }

        if (typeof window["PfTN4"] === "function") {
            window["PfTN4"](errPayload, "aZhEf7", chlOpt["kQOwR1"]);
        }

        const errToThrow = (event.error && typeof event.error === "object")
            ? event.error
            : new Error(event.message);

        errToThrow["QYNe4"] = true;
        throw errToThrow;
    }

    // =========================================================================
    // 03. Challenge Tasks Pipeline Closures
    // =========================================================================

    /**
     * Closure at 0xE1EB
     * Mirrors property descriptor between target objects.
     */
    function mirrorProperty(target, source, prop) {
        const desc = Object.getOwnPropertyDescriptor(source, prop);
        if (desc) {
            Object.defineProperty(target, prop, desc);
        }
    }

    /**
     * Closure at 0xDE95
     * Wraps payload result with status key.
     */
    function wrapResult(task, value) {
        return {
            svEtd6: task.svEtd6,
            eOgrn0: value
        };
    }

    /**
     * Closure at 0xDECB
     * Wraps payload flag.
     */
    function wrapSuccessFlag(task) {
        return {
            svEtd6: task.svEtd6,
            bQjGu7: true
        };
    }

    /**
     * Closure at 0xDF05
     * Timeout callback for scheduled challenge task.
     */
    function onTaskTimeout(task, resolveFn) {
        if (task && task["veJRU5"] && typeof task["veJRU5"].call === "function") {
            try {
                task["veJRU5"].call();
            } catch (_) {
                if (typeof window["SkQox7"] === "function") {
                    window["SkQox7"](CIPHER_PAYLOAD_5);
                }
            }
        }

        resolveFn({
            svEtd6: task ? task.svEtd6 : undefined,
            ChRE0: true,
            eOgrn0: undefined
        });
    }

    /**
     * Closure at 0xE01C
     * Schedules a task timeout timer.
     */
    function scheduleTaskTimeout(task, resolveFn, timeoutMs) {
        return window.setTimeout(function () {
            onTaskTimeout(task, resolveFn);
        }, timeoutMs);
    }

    /**
     * Closure at 0xE05F
     * Clears scheduled task timeout timer.
     */
    function clearTaskTimeout(timerId) {
        window.clearTimeout(timerId);
    }

    /**
     * Closure at 0xE08A
     * Runs an individual challenge probe task with Promise.race and timeout fallback.
     */
    function executeChallengeTask(taskDef) {
        let timeoutMs = 2000;
        if (taskDef && typeof taskDef["dndff2"] === "number") {
            timeoutMs = taskDef["dndff2"];
        } else if (taskDef && typeof taskDef["cmqLa9"] === "number") {
            timeoutMs = Math.max(0, 2000 - (Date.now() - taskDef["cmqLa9"]));
        }

        const taskPromise = (taskDef && taskDef["GPSn1"])
            ? taskDef["GPSn1"].then(
                function (val) { return wrapResult(taskDef, val); },
                function () { return wrapSuccessFlag(taskDef); }
            )
            : Promise.resolve(wrapSuccessFlag(taskDef));

        let timerId;
        const timeoutPromise = new Promise(function (resolve) {
            timerId = scheduleTaskTimeout(taskDef, resolve, timeoutMs);
        });

        return Promise.race([taskPromise, timeoutPromise]).then(function (result) {
            clearTaskTimeout(timerId);
            return result;
        });
    }

    /**
     * Closure at 0xE25A
     * Aggregates completed challenge task results and decrypts responses.
     */
    function onAllTasksResolved(results, stateBag) {
        if (!Array.isArray(results)) return;

        for (let i = 0; i < results.length; i++) {
            try {
                const res = results[i];
                if (!res) continue;

                const key = res.svEtd6;
                const target = stateBag[key];
                if (!target) continue;

                if (res.bQjGu7) {
                    target.telu1 = true;
                } else {
                    const val = res.eOgrn0;
                    if (val !== undefined && val !== null && typeof val === "object") {
                        const keys = Object.keys(val);
                        for (let j = 0; j < keys.length; j++) {
                            mirrorProperty(target, val, keys[j]);
                        }
                    } else if (val !== undefined) {
                        stateBag[key] = val;
                    }
                }

                if (res.ChRE0) {
                    target.qqin0 = true;
                }
            } catch (_) {}
        }

        // Trigger verification cipher decryptors
        const payloads = [
            CIPHER_PAYLOAD_1,
            CIPHER_PAYLOAD_2,
            CIPHER_PAYLOAD_3,
            CIPHER_PAYLOAD_4
        ];

        payloads.forEach(function (payload) {
            try {
                if (typeof window["SkQox7"] === "function") {
                    window["SkQox7"](payload);
                }
            } catch (_) {}
        });
    }

    /**
     * Closure at 0xE68D
     * Task failure catch handler.
     */
    function onTasksError() {
        try {
            if (typeof window["SkQox7"] === "function") {
                window["SkQox7"](CIPHER_PAYLOAD_2);
            }
        } catch (_) {}
    }

    /**
     * Closure at 0xE710
     * Challenge task pipeline finally handler.
     */
    function onTasksFinally(stateBag, startTime, taskQueue, finalizeFn) {
        stateBag["VPlfa6"] = Date.now() - startTime;
        taskQueue.length = 0;
        finalizeFn();
    }

    /**
     * Closure at 0xD840
     * Challenge Finalization, Worker cleanup & Beacon delivery
     */
    function finalizeAndSendBeacon(stateBag) {
        // Clean up Web Worker and Object URL
        if (stateBag["MUXdN7"]) {
            URL.revokeObjectURL(stateBag["MUXdN7"]);
            stateBag["MUXdN7"] = undefined;
        }
        if (stateBag["Xhlo9"]) {
            stateBag["Xhlo9"].terminate();
            stateBag["Xhlo9"] = undefined;
        }

        // Clear payload state
        stateBag["QtLXm2"] = "";

        // Construct beacon destination URL
        const beaconUrl = BEACON_BASE + "/h/" + (chlOpt["DuPd9"] || "") + BEACON_PATH;

        // Deliver challenge results beacon
        if (typeof window["SkQox7"] === "function") {
            try {
                window["SkQox7"](beaconUrl, stateBag);
            } catch (_) {}
        }

        if (typeof window.fetch === "function") {
            window.fetch(beaconUrl, {
                method: "POST",
                body: JSON.stringify(stateBag),
                headers: { "Content-Type": "application/json" }
            }).catch(function () {});
        } else if (typeof navigator !== "undefined" && typeof navigator.sendBeacon === "function") {
            navigator.sendBeacon(beaconUrl, JSON.stringify(stateBag));
        }
    }

    // =========================================================================
    // 04. Environment Probing & State Initialization (Closure 0x6535E)
    // =========================================================================

    function initEnvironment() {
        const stateBag = {};

        // 1. Basic challenge options
        stateBag["hYPXy0"] = chlOpt["aUlu1"];
        stateBag["KimyV3"] = chlOpt["KimyV3"];
        stateBag["XamU2"] = chlOpt["XamU2"];
        stateBag["CRAW0"] = "oWrxl6";

        // 2. Timing and offset calculations
        stateBag["NKjo6"] = (chlOpt["oCmIf9"] || 0) - (chlOpt["NbNuk0"] || 0);
        stateBag["DofrX3"] = (chlOpt["TGLE6"] || 0) - (chlOpt["HglSP8"] || 0);
        stateBag["eOkZH7"] = (chlOpt["TGLE6"] || 0) - (chlOpt["HglSP8"] || 0);

        // 3. Runtime configuration parameters
        stateBag["iDbd1"] = chlOpt["iDbd1"];
        stateBag["ORvk4"] = chlOpt["ORvk4"];
        stateBag["CsJSj9"] = chlOpt["CsJSj9"];
        stateBag["vhKyy7"] = chlOpt["vhKyy7"];
        stateBag["AccaH6"] = chlOpt["AccaH6"];
        stateBag["pcFOG3"] = chlOpt["pcFOG3"];
        stateBag["hffMX8"] = chlOpt["hffMX8"];
        stateBag["JJcr4"] = chlOpt["JJcr4"];
        stateBag["zHRub8"] = chlOpt["zHRub8"];
        stateBag["hoOA9"] = chlOpt["hoOA9"];
        stateBag["FbLgm0"] = chlOpt["FbLgm0"];
        stateBag["PKrcd8"] = chlOpt["PKrcd8"];
        stateBag["fHVg1"] = chlOpt["fHVg1"];
        stateBag["OjgVE5"] = chlOpt["OjgVE5"];
        stateBag["DxRba3"] = chlOpt["DxRba3"];
        stateBag["NnkF4"] = chlOpt["NnkF4"];
        stateBag["bYmvb6"] = chlOpt["bYmvb6"];
        stateBag["qPvaV6"] = chlOpt["qPvaV6"];
        stateBag["YFHFy3"] = chlOpt["YFHFy3"];
        stateBag["Jswp1"] = chlOpt["Jswp1"];
        stateBag["ktxeY4"] = chlOpt["ktxeY4"];
        stateBag["PlUl9"] = chlOpt["PlUl9"];
        stateBag["hDyh6"] = chlOpt["hDyh6"];
        stateBag["vPls7"] = chlOpt["vPls7"];
        stateBag["QsbwJ0"] = chlOpt["QsbwJ0"];
        stateBag["tbnVs2"] = chlOpt["tbnVs2"];
        stateBag["NlUiv3"] = chlOpt["NlUiv3"];
        stateBag["uEkj3"] = (chlOpt["PgGRd4"] || 0) - (chlOpt["ydrIB0"] || 0);
        stateBag["JEBbI4"] = chlOpt["JEBbI4"];
        stateBag["uxpy4"] = chlOpt["uxpy4"];
        stateBag["KweJ1"] = (typeof window["iaNL2"] === "function") ? window["iaNL2"]() : undefined;
        stateBag["vyYWc3"] = chlOpt["vyYWc3"];

        if (chlOpt["apSMs6"] && chlOpt["apSMs6"].length > 0) {
            stateBag["apSMs6"] = chlOpt["apSMs6"];
        }

        // 4. Attach hidden iframe injector (Closure 0x0298)
        stateBag["PNPm7"] = createHiddenIframe;

        // 5. DOM & Shadow DOM Structural Probing
        const isBodyShadowClosed = document.body &&
            document.body.shadowRoot &&
            (chlOpt["gNoox7"] ? chlOpt["gNoox7"].mode === "closed" : false) &&
            document.body.innerHTML === "";
        stateBag["bQWwB7"] = !!isBodyShadowClosed;

        const body = document.body;
        const head = document.head;
        const container = chlOpt["gNoox7"];
        const styleEl = container ? container.querySelector("style") : null;
        const divEl = container ? container.querySelector("div") : null;

        const hasFollowing = (head && body) ? ((head.compareDocumentPosition(body) & (window.Node ? window.Node.DOCUMENT_POSITION_FOLLOWING : 4)) !== 0) : false;
        const hasStyleFollowing = (styleEl && divEl) ? ((styleEl.compareDocumentPosition(divEl) & (window.Node ? window.Node.DOCUMENT_POSITION_FOLLOWING : 4)) !== 0) : false;
        const divDocPos = (body && divEl && window.Node) ? (body.compareDocumentPosition(divEl) & (
            window.Node.DOCUMENT_POSITION_DISCONNECTED |
            window.Node.DOCUMENT_POSITION_FOLLOWING |
            window.Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC
        )) : 0;

        const domPositionFlag = (hasFollowing && hasStyleFollowing && divDocPos !== 0) ? "vvZW7" : "hzxxI7";
        stateBag[domPositionFlag] = true;

        // 6. DOM Structure Metrics Fingerprinting
        const domMetrics = [
            (body && body.shadowRoot) || null,
            (container && container.mode) || null,
            (body && body.outerHTML && body.outerHTML.length) || 0,
            (body && body.innerHTML && body.innerHTML.length) || 0,
            (head && body && head.compareDocumentPosition(body)) || 0,
            (styleEl && divEl && window.Node) ? (styleEl.compareDocumentPosition(divEl) & window.Node.DOCUMENT_POSITION_FOLLOWING) : 0,
            divDocPos,
            (body && body.attachShadow) ? body.attachShadow.toString().toLocaleString().toString() : ""
        ];
        stateBag["UFlzi7"] = JSON.stringify(domMetrics);

        // 7. Spin up isolated Web Worker with Trusted Types script policy
        try {
            const workerScript = "var _p=null;if(self.trustedTypes)try{_p=self.trustedTypes.createPolicy('nAZtB7',{createScript:function(s){return s;}})}catch(e){self.postMessage({type:'tt-policy-error',msg:e.message})}onmessage=function(e){e.isTrusted&&''===e.origin&&null===e.source&&eval(_p?_p.createScript(e.data):e.data)}";
            const blob = new Blob([workerScript], { type: "text/javascript" });
            const blobUrl = URL.createObjectURL(blob);
            stateBag["MUXdN7"] = blobUrl;

            const workerUrl = (typeof window["nFWX6"] === "function") ? window["nFWX6"](blobUrl) : blobUrl;
            stateBag["Xhlo9"] = new Worker(workerUrl);
            stateBag["ikWJl0"] = sha256Digest;
        } catch (_) {}

        return stateBag;
    }

    // =========================================================================
    // 05. Task Pipeline Orchestration (Closure 0x35A22)
    // =========================================================================

    function runTasksQueue(stateBag, taskQueue) {
        // Deserializes and decodes challenge parameters
        stateBag["bLwNX7"] = JSON.parse("[]");
        stateBag["bLVb2"] = decipherString("ÿÿ\u{3}ö\0\0\0\0\0\0\u{1}ÉNzUtuO2auMz8QRYF76K.u83i5sDQhZ_.QSRCuuBpCww-1791597649-1.3.1.1-CIKTusrv6wUUvjVA1412s8KZ.k_dVXDdWp519LmKRjsGMqqEjisbcbp2ElIrL7ySgdFDkRfJsqU3HHpSDYrATlvNQPCTEV2FuAzdHKZ_JaH77qIPG.mnIddkUY5vgpLPbMHRpaIltBe_CuRFZoiKGLtpr.9Wb16L5CMiRvX16Z5r4jbsuvYDeMwYIpQ4Aog4xrOkaFb67NId0yAcz043CsvZqEM5yVKb4c5KPeSMCbYuy8aionB_f3mCDAk_A0QMl4J28ZomTHTa1xGQ_1JVCgWRe0IVzmIixC7H2udfC3YyRIgKKCkIp59WEES9.BEY81vf71ivkVliY.TSubBU3v8Ae9FjSus6mI4PCq60g5F73hpFoiSsgrTZqnphB6BWgWvxQ.h6IEudagkMO_VMiUcTPQoSccuJGIcm7YOSVVX79CnNlmrrzTSgYo_hy7x4t6zY4_acRPpB8lMd4g4k1mjGKNFDpajncK5dYpoDD6WcOCcPHIWEybmfn65BGN6blaEt.KwKz0aGDnoKggNZ9R6txX9aCitUjuXRr0I71lmfhYFEAA3q0NNfR9HuMXbnHpzO26xD83jqvIZxvE7bmZzISzIRsY9BJSBMpnOTxY2Rw9UNO6vmVq4OslSFnBZCzqCx3FbMOpj_2AsA2mv92JsqdBHBn2QQAE2b8eVrFYz9P4qrfZWcGZbHXNOAaunMjgIZs8j0_k7BTG.izzFH2U2N2CwChJiYWqVHC74ZgHYwZZk4sySt_hZz7LurfuRpxvi_IsWHGfgfcAEGP1AnMz6vbNR7Y0v_VqE2VJN8gy2NszXwaTr1iO_7GwBg_T5_TxnQ78mlNsXXD2YeBsUhYPDhLfJ__XBtomyzRr5mCh1Kg6u8HdNXJU9FVEEAjQyyCCtp0oFEUFUNALh0QiujJZvqdFPm85kpgh2HL0wGpXPziA83RPafcVh");
        stateBag["Pqyt7"] = decipherString("\0+tC-BCGZ9hq_AcWnLWuGL1l7gSveMTLlORa4zTG482Qc");
        stateBag["QgLe6"] = JSON.parse("0");
        stateBag["jIdZ4"] = decipherString("ÿÿ\0ö\0\0\u{1}É\0\0\0´Ps1wFfyu8grUSZr.gr_SKvy_Xy.rbj0MqcUYPHDKzPQ-1791597649-1.3.1.1-lJMrRPapF3S0BSbXThJtyb37xr52Wsv6zabXpP58WEnQnWuYT72KZcdZvm8ztrPeSIO6GVBQvi5lu6HCSDt_wiUEXVMX87uFRMM4DMjSw8ru0QmwShhbk8N8extH9yQxDHxdnjUxFWDCkexsTCUtXDQBZh6Z0qZrIv0YSi9l6BB2H59N83UKVBw");

        // Runtime dynamic options
        stateBag["PKrcd8"] = chlOpt["PKrcd8"] || undefined;
        stateBag["cUgl7"] = chlOpt["cUgl7"] || undefined;
        stateBag["GOxN9"] = chlOpt["GOxN9"];
        stateBag["dxLyU0"] = chlOpt["dxLyU0"];
        stateBag["GyZy8"] = chlOpt["GyZy8"];
        stateBag["qYSky6"] = chlOpt["qYSky6"];
        stateBag["EZIq9"] = chlOpt["gtNx8"] ? chlOpt["gtNx8"]["evDzJ2"] : undefined;

        if (chlOpt["apSMs6"] && chlOpt["apSMs6"].length > 0) {
            stateBag["apSMs6"] = chlOpt["apSMs6"];
        }

        // Bail out if queue exceeds safe boundary
        if (taskQueue.length >= 500) {
            return;
        }

        function finalize() {
            finalizeAndSendBeacon(stateBag);
        }

        // Execute task pipeline if tasks present, otherwise finalize immediately
        if (taskQueue.length !== 0) {
            const startTime = Date.now();
            const promiseList = taskQueue.map(executeChallengeTask);

            Promise.all(promiseList)
                .then(function (results) {
                    onAllTasksResolved(results, stateBag);
                })
                .catch(onTasksError)
                .then(function () {
                    onTasksFinally(stateBag, startTime, taskQueue, finalize);
                });
        } else {
            finalize();
        }
    }

    // =========================================================================
    // 06. Main Engine Bootstrap & Lifecycle Registration
    // =========================================================================

    function runChallengeEngine() {
        // Shared challenge state bag (scope[1])
        const stateBag = initEnvironment();

        // Shared task queue (scope[6])
        const taskQueue = [];

        // Register global error listeners (outer scope: 0x6E820 - 0x6E8EB)
        window.addEventListener("unhandledrejection", onUnhandledRejection);
        window["PmusQ9"] = true;
        window.addEventListener("error", function (ev) {
            onWindowError(ev, stateBag);
        }, { once: true });

        // Execute challenge task scheduler (0x6E8D1 -> 0x35A22)
        runTasksQueue(stateBag, taskQueue);
    }

    // Execute Turnstile Challenge Engine
    runChallengeEngine();

})(typeof window !== "undefined" ? window : globalThis);
