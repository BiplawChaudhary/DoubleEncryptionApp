// import { useForm } from "react-hook-form";
// import Input from "./components/input.tsx";
// import {
//   generateAESKey,
//   generateIV,
//   encryptBody,
//   encryptKey,
//   decryptBody,
//   decryptKey,
// } from "./utils/encrypt.ts";
// import { useState } from "react";

// function App() {
//   const [decryptSystem, setDecryptSystem] = useState("");
//   const { control, handleSubmit } = useForm();
//   const { control: decryptcontrol, handleSubmit: decryptHandleSubmit } =
//     useForm();
//   const { control: keysControl, handleSubmit: keysSubmit } = useForm();
//   const iv = generateIV();
//   const publicKey = localStorage.getItem("public");
//   const privatekey = localStorage.getItem("private");
//   const onSubmit = (data) => {
//     console.log(data);
//     const aesKey = generateAESKey();
//     console.log(aesKey);
//     const Encryptdata = {
//       encryptedBody: encryptBody(JSON.stringify(data?.encrypt), aesKey, iv),
//       encryptedKey: encryptKey(aesKey, publicKey),
//     };
//     console.log(Encryptdata);
//   };

//   const onDecryptData = (data) => {
//     console.log("raw data:", data);

//     // Parse the inner JSON string
//     console.log("1");
//     const parsed =
//       typeof data?.decrypt === "string"
//         ? JSON.parse(data.decrypt)
//         : data?.decrypt;
//     console.log("2");

//     const body = parsed?.encryptedBody;
//     const key = parsed?.encryptedKey;
//     console.log("3");

//     if (!body || !key) {
//       console.error("Missing encryptedBody or encryptedKey", parsed);
//       return;
//     }
//     console.log("4");
//     const decryptedKey = decryptKey(key, privatekey);
//     console.log("5");

//     // if (!decryptedKey) {
//     //   console.error("decryptKey returned empty/null");
//     //   return;
//     // }

//     const decryptedBody = decryptBody(body, decryptedKey, iv);
//     const decryptedParse =
//       typeof decryptedBody === "string"
//         ? JSON.parse(decryptedBody)
//         : decryptedBody;
//     console.log("decryptedBody:", decryptedParse);
//     setDecryptSystem(decryptedParse);
//   };

//   const setprivateKey =
//     "MIICdQIBADANBgkqhkiG9w0BAQEFAASCAl8wggJbAgEAAoGBAKw0xxaGIs1SXw8+yWG0kAooKFS3z5BG+crtBcNixl1XxInW20NhGN1BiiALiC1QBYTAmu66Nt+2u224Apeuq4hT9d9UHZAyI9KEsy45FXe+2lpfaOIuUVuhwsZUX//i8fQmUaSUvFWyg5j7T3xwIZZtGa68deHHoENUJulRL2czAgMBAAECgYACrnW1K5SKJvC0/5DKNTIS/moWW6BfSkOkfclbsAOPu4ijbtWOOIpXE6ivdA6ESh0z4n3nHr4xAJrti/J6Yy1nlOQAOewZNwm9hNoJv+3b82oVhfBx6oMNnTMRogX9/fRDOuqRzVJ1Xroijs1QD5hN56OSagkvvSLZ6DZtIh11jQJBAPz3xTNFUwXYMk9vNrVO2QR9u7Jz/L/TyQ0IXoQ/ofMDSpGb0l4NcZ4xjzU2YwTeWkQ7+DaA2Y1O5fC6iCyi7RcCQQCuRTDZpSewwmR7HW9OsTOrLRkWk1lWqrIADJp2iflbXF3G7pXo2h2ax140AY2W0fkRywLBwurL6wEOjMdbVoBFAkB09qLpZ95RT3tDmypyfnh9SR1mD5cHowbMzdfV0g4xbI4n8SI9dn3YJRYQBouWDrEx54CGwuDUI2zR941LBjIVAkBD5oOdGaN4VJWP/q0CzTpjhMPUrv7NLN8D8+UvMJ0uwrNrMkTIoEuOpgWHX9+KFy/jheUCF+8iGuOjhqiaZv69AkBDVHbgUfqp7NxbNMTggfSXX8A3cLtLReFQczCD/zioanFdKEV1fCYAEVqQojIcCk54Sy5hasBo5oUVgKtWWXcB";
//   const setPublickey =
//     "MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCsNMcWhiLNUl8PPslhtJAKKChUt8+QRvnK7QXDYsZdV8SJ1ttDYRjdQYogC4gtUAWEwJruujbftrttuAKXrquIU/XfVB2QMiPShLMuORV3vtpaX2jiLlFbocLGVF//4vH0JlGklLxVsoOY+098cCGWbRmuvHXhx6BDVCbpUS9nMwIDAQAB";

//   const onKeySubmit = (data) => {
//     console.log(data);
//     localStorage.setItem("public", setPublickey);
//     localStorage.setItem("private", setprivateKey);
//   };
//   return (
//     <>
//       <form onSubmit={handleSubmit(onSubmit)}>
//         <Input name={"encrypt"} control={control} label={"Encrypt"} />
//         <button type={"submit"}>asdf</button>
//       </form>
//       <form onSubmit={decryptHandleSubmit(onDecryptData)}>
//         <Input name={"decrypt"} control={decryptcontrol} label={"Decrypt"} />
//         <button type={"submit"}>Decrypt</button>
//       </form>

//       <form onSubmit={keysSubmit(onKeySubmit)}>
//         <Input
//           name={"privateKey"}
//           control={keysControl}
//           label={"Private Key"}
//         />
//         <Input name={"publicKey"} control={keysControl} label={"public Key"} />
//         <button type={"submit"}>asdf</button>
//       </form>
//       {decryptSystem && <div>{decryptSystem}</div>}
//     </>
//   );
// }

// export default App;

import { useForm } from "react-hook-form";
import Input from "./components/input.tsx";
import ResultBox from "./components/ResultBox.tsx";
import ActionBar from "./components/ActionBar.tsx";
import KeyField from "./components/KeyField.tsx";
import GlobalStyles from "./components/GlobalStyles.tsx";
import {
  generateAESKey,
  encryptBody,
  encryptKey,
  decryptBody,
  decryptKey,
} from "./utils/encrypt.ts";
import { useState, useEffect } from "react";
import { Settings, X, Lock, Unlock, ShieldCheck, Key } from "lucide-react";

const EmptyState = ({
  icon: Icon,
  color,
  text,
}: {
  icon: any;
  color: string;
  text: string;
}) => (
  <div className="mt-4 p-6 text-center rounded-xl border border-dashed border-blue-400 bg-blue-50/40">
    <Icon size={22} color={color} className="mx-auto mb-2.5 block opacity-90" />
    <p className="mono text-lg text-black-300 leading-relaxed m-0 whitespace-pre-line">
      {text}
    </p>
  </div>
);

function TabPanel({
  onEncrypt,
  onDecrypt,
  encryptControl,
  decryptControl,
  encryptResult,
  decryptResult,
  onClearEncrypt,
  onClearDecrypt,
}: any) {
  const [active, setActive] = useState<"encrypt" | "decrypt">("encrypt");

  const tabs = [
    { id: "encrypt" as const, label: "Encrypt", Icon: Lock },
    { id: "decrypt" as const, label: "Decrypt", Icon: Unlock },
  ];

  return (
    <div>
      {/* Tab switcher */}
      <div className="grid grid-cols-2 gap-1 p-1.5 mb-7 bg-blue-50 border border-blue-100 rounded-2xl">
        {tabs.map(({ id, label, Icon }) => {
          const isActive = active === id;
          return (
            <button
              key={id}
              onClick={() => setActive(id)}
              className={`flex items-center justify-center gap-2 py-2.5 rounded-xl border font-semibold text-2xl tracking-wide transition-all duration-300 cursor-pointer
                ${
                  isActive
                    ? id === "encrypt"
                      ? "bg-white text-indigo-800 border-indigo-400 shadow-sm shadow-indigo-100"
                      : "bg-white text-pink-600 border-pink-400 shadow-sm shadow-pink-100"
                    : "bg-transparent text-blue-300 border-transparent hover:text-blue-400"
                }`}
              style={{ fontFamily: "Syne, sans-serif" }}
            >
              <Icon size={20} />
              {label}
            </button>
          );
        })}
      </div>

      {/* Encrypt panel */}
      {active === "encrypt" && (
        <div className="panel-in">
          <SectionLabel
            icon={Lock}
            label="Plaintext Input"
            color="#6366f1"
            bgClass="bg-indigo-50 border-indigo-100"
          />
          <form onSubmit={onEncrypt} className="mt-4">
            <div className="ci mb-3.5">
              <Input
                name="encrypt"
                control={encryptControl}
                rules={{ required: "Please enter something to encrypt" }}
              />
            </div>
            <ActionBar
              submitLabel="Encrypt"
              onClear={onClearEncrypt}
              btnClass="shimmer-btn"
              clearAccent="99,102,241"
            />
          </form>
          {encryptResult ? (
            <ResultBox
              label="Encrypted payload — copy & paste into Decrypt tab"
              content={encryptResult}
              accent="purple"
            />
          ) : (
            <EmptyState
              icon={Lock}
              color="#818cf8"
              text={"Your encrypted payload will appear here."}
            />
          )}
        </div>
      )}

      {/* Decrypt panel */}
      {active === "decrypt" && (
        <div className="panel-in">
          <SectionLabel
            icon={Unlock}
            label="Encrypted Payload"
            color="#ec4899"
            bgClass="bg-pink-50 border-pink-100"
          />
          <form onSubmit={onDecrypt} className="mt-4">
            <div className="ci mb-3.5">
              <Input
                name="decrypt"
                control={decryptControl}
                rules={{ required: "Please paste an encrypted payload" }}
              />
            </div>
            <ActionBar
              submitLabel="Decrypt"
              onClear={onClearDecrypt}
              btnClass="shimmer-btn"
              clearAccent="99,102,241"
            />
          </form>
          {decryptResult ? (
            <ResultBox
              label="Decrypted output"
              content={decryptResult}
              accent="blue"
            />
          ) : (
            <EmptyState
              icon={Unlock}
              color="#f9a8d4"
              text={
                "Paste an encrypted payload and your\ndecrypted data will appear here."
              }
            />
          )}
        </div>
      )}
    </div>
  );
}

function SectionLabel({ icon: Icon, label, color, bgClass }: any) {
  return (
    <div className="flex items-center gap-3">
      <div
        className={`w-11 h-11 rounded-xl border flex items-center justify-center ${bgClass}`}
      >
        <Icon size={20} color={color} />
      </div>
      <span className="font-bold text-xl" style={{ fontFamily: "Syne", color }}>
        {label}
      </span>
    </div>
  );
}

function App() {
  const [decryptResult, setDecryptResult] = useState("");
  const [encryptResult, setEncryptResult] = useState("");
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [showPub, setShowPub] = useState(false);
  const [showPriv, setShowPriv] = useState(false);
  const [keySaveMsg, setKeySaveMsg] = useState("");
  const [hasKeys, setHasKeys] = useState(false);

  useEffect(() => {
    setHasKeys(
      !!(localStorage.getItem("public") && localStorage.getItem("private")),
    );
  }, [isSettingsOpen]);

  const { control, handleSubmit, reset: resetEncrypt } = useForm();
  const {
    control: decryptControl,
    handleSubmit: decryptHandleSubmit,
    reset: resetDecrypt,
  } = useForm();
  const {
    control: keysControl,
    handleSubmit: keysHandleSubmit,
    setValue: setKeyValue,
  } = useForm();

  const getPublicKey = () => localStorage.getItem("public") || "";
  const getPrivateKey = () => localStorage.getItem("private") || "";

  const openSettings = () => {
    setKeyValue("publicKey", getPublicKey());
    setKeyValue("privateKey", getPrivateKey());
    setIsSettingsOpen(true);
  };

  const onEncrypt = (data: any) => {
    if (!getPublicKey()) {
      alert("Set your public key in Settings first.");
      return;
    }
    const aesKey = generateAESKey();
    setEncryptResult(
      JSON.stringify(
        {
          encryptedBody: encryptBody(JSON.stringify(data?.encrypt), aesKey),
          encryptedKey: encryptKey(aesKey, getPublicKey()),
        },
        null,
        2,
      ),
    );
  };

  const onDecrypt = (data: any) => {
    if (!getPrivateKey()) {
      alert("Set your private key in Settings first.");
      return;
    }
    try {
      const parsed =
        typeof data?.decrypt === "string"
          ? JSON.parse(data.decrypt)
          : data?.decrypt;
      const { encryptedBody, encryptedKey } = parsed;
      if (!encryptedBody || !encryptedKey) {
        alert("Invalid payload — needs encryptedBody, encryptedKey");
        return;
      }
      const dk = decryptKey(encryptedKey, getPrivateKey());
      if (!dk) {
        alert("Key decryption failed. Check your private key.");
        return;
      }
      const body = decryptBody(encryptedBody, dk);
      const p2 = typeof body === "string" ? JSON.parse(body) : body;
      setDecryptResult(
        typeof p2 === "object" ? JSON.stringify(p2, null, 2) : String(p2),
      );
    } catch (err) {
      alert("Decryption failed. Check input and keys.");
      console.error(err);
    }
  };

  const onKeySave = (data: any) => {
    const pub = data?.publicKey?.trim();
    const priv = data?.privateKey?.trim();
    if (!pub || !priv) {
      setKeySaveMsg("Both keys are required.");
      return;
    }
    localStorage.setItem("public", pub);
    localStorage.setItem("private", priv);
    setKeySaveMsg("Keys saved!");
    setTimeout(() => {
      setKeySaveMsg("");
      setIsSettingsOpen(false);
    }, 1300);
  };

  return (
    <>
      <GlobalStyles />

      <div className=" w-full min-h-screen flex flex-col items-center bg-slate-200">
        <header className="su w-full max-w-4xl px-0 pt-7 flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center gap-4">
            <div
              className="w-10 h-10 rounded-xl flex items-center justify-center shadow-md"
              style={{
                background: "linear-gradient(135deg, #6366f1, #ec4899)",
              }}
            >
              <ShieldCheck size={19} color="#fff" />
            </div>
            <div>
              <div
                className="font-extrabold text-lg tracking-tight"
                style={{
                  fontFamily: "Syne",
                  background:
                    "linear-gradient(90deg, #4f46e5, #7c3aed, #ec4899)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                RCL Encryption Util
              </div>
            </div>
          </div>

          <button
            onClick={openSettings}
            title="Settings"
            className="w-14 h-14 rounded-xl border border-blue-200 bg-white flex items-center justify-center cursor-pointer text-blue-400 transition-all duration-200 hover:border-indigo-300 hover:text-indigo-500 hover:bg-indigo-50 hover:shadow-sm"
          >
            <Settings size={20} />
          </button>
        </header>

        <div className="su2 w-full max-w-4xl mt-9 mb-10 bg-white rounded-3xl shadow-xl shadow-blue-100/60 border border-blue-100 overflow-hidden">
          <div
            className="h-1"
            style={{
              background:
                "linear-gradient(90deg, #6366f1 0%, #ec4899 50%, #3b82f6 100%)",
            }}
          />

          <div className="px-9 pt-8 pb-10">
            <TabPanel
              onEncrypt={handleSubmit(onEncrypt)}
              onDecrypt={decryptHandleSubmit(onDecrypt)}
              encryptControl={control}
              decryptControl={decryptControl}
              encryptResult={encryptResult}
              decryptResult={decryptResult}
              onClearEncrypt={() => {
                resetEncrypt();
                setEncryptResult("");
              }}
              onClearDecrypt={() => {
                resetDecrypt();
                setDecryptResult("");
              }}
            />
          </div>
        </div>
      </div>

      {isSettingsOpen && (
        <div
          className="fixed inset-0  z-50 flex items-center justify-center p-5"
          style={{
            background: "rgba(239,246,255,0.75)",
            backdropFilter: "blur(18px)",
            WebkitBackdropFilter: "blur(18px)",
          }}
          onClick={() => setIsSettingsOpen(false)}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-[920px]  bg-white rounded-3xl border border-blue-100 shadow-2xl shadow-indigo-100 overflow-hidden panel-in"
          >
            {/* Accent stripe */}
            <div
              className="h-0.5"
              style={{
                background: "linear-gradient(90deg, #6366f1, #ec4899, #3b82f6)",
              }}
            />

            {/* Modal header */}
            <div className="flex justify-between items-center px-7 pt-6 pb-5 border-b border-blue-50">
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-indigo-50 to-pink-50 border border-indigo-100 flex items-center justify-center">
                  <Key size={26} color="#6366f1" />
                </div>
                <div
                  className="font-bold text-2xl text-slate-700"
                  style={{ fontFamily: "Syne" }}
                >
                  RSA Key Configuration
                </div>
              </div>
              <button
                onClick={() => setIsSettingsOpen(false)}
                className="w-10 h-10 rounded-lg bg-slate-50 border border-slate-100 flex items-center justify-center cursor-pointer text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition-all duration-200"
              >
                <X size={24} />
              </button>
            </div>

            <form onSubmit={keysHandleSubmit(onKeySave)}>
              <div className="px-7 py-5 flex flex-col gap-5">
                {/* Privacy notice */}
                <div className="flex items-center gap-3 px-4 py-3 rounded-xl bg-amber-50 border border-amber-200">
                  <ShieldCheck
                    size={20}
                    color="#d97706"
                    className="shrink-0 mt-0.5"
                  />
                  <span
                    className="text-amber-700 text-lg leading-relaxed"
                    style={{ fontFamily: "Syne" }}
                  >
                    Keys are stored only in your browser's localStorage. They
                    are never sent to any external server.
                  </span>
                </div>

                <KeyField
                  name="publicKey"
                  control={keysControl}
                  label="Public Key (RSA)"
                  show={showPub}
                  onToggle={() => setShowPub((v) => !v)}
                  accent="#6366f1"
                />

                <KeyField
                  name="privateKey"
                  control={keysControl}
                  label="Private Key (RSA)"
                  show={showPriv}
                  onToggle={() => setShowPriv((v) => !v)}
                  accent="#ec4899"
                />

                {keySaveMsg && (
                  <div
                    className={`px-4 py-2.5 rounded-xl text-center mono text-lg border
                    ${
                      keySaveMsg.includes("saved")
                        ? "bg-emerald-50 border-emerald-200 text-emerald-600"
                        : "bg-red-50 border-red-200 text-red-500"
                    }`}
                  >
                    {keySaveMsg}
                  </div>
                )}
              </div>

              {/* Footer */}
              <div className="flex gap-3 px-7 pb-7">
                <button
                  type="submit"
                  className="shimmer-btn flex-[2] py-3 rounded-2xl border-none text-white font-bold text-sm tracking-widest cursor-pointer uppercase"
                  style={{ fontFamily: "Syne" }}
                >
                  Save Keys
                </button>
                <button
                  type="button"
                  onClick={() => setIsSettingsOpen(false)}
                  className="flex-1 py-3 rounded-2xl bg-pink-400 border text-white font-semibold text-lg tracking-wide cursor-pointer hover:bg-pink-600 transition-all duration-200"
                  style={{ fontFamily: "Syne" }}
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}

export default App;
