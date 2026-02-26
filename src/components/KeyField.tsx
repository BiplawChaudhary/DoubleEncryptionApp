// import Input from "./input";

// export default function KeyField({ name, control, label, show, onToggle, accent }: any) {
//   return (
//     <div>
//       <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 8 }}>
//         <span style={{
//           fontFamily: "Syne", fontWeight: 600, fontSize: 11.5,
//           color: accent, letterSpacing: ".07em", textTransform: "uppercase",
//         }}>{label}</span>
        
//       </div>
//       <div className="ci" style={{
//         background: "rgba(255,255,255,.03)",
//         border: "1px solid rgba(139,92,246,.14)",
//         borderRadius: 12, padding: "10px 9px",
//         display:"flex"
//       }}>
//         <Input name={name} control={control} label="" type={show ? "text" : "password"}
//           rules={{ required: `${label} is required` }} />
//       </div>
//     </div>
//   );
// }

import Input from "./input";


export default function KeyField({ name, control, label, show,  accent }: any) {
  return (
    <div>
      <div className="flex justify-between items-center mb-2">
        <span
          className="font-semibold text- tracking-widest uppercase"
          style={{ fontFamily: "Syne", color: accent }}
        >
          {label}
        </span>
      </div>
      <div
        className="ci rounded-xl p-2.5 border bg-slate-50/60"
        style={{ borderColor: `${accent}30` }}
      >
        <Input
          name={name}
          control={control}
          label=""
          type={show ? "text" : "password"}
          rules={{ required: `${label} is required` }}
        />
      </div>
    </div>
  );
}