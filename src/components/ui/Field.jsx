export const inputClass = 'w-full rounded-lg border border-slate-300 bg-white px-3.5 py-2.5 text-sm text-ink placeholder:text-slate-400'

export default function Field({ label, htmlFor, children }) {
  return (
    <div>
      <label htmlFor={htmlFor} className="mb-1.5 block text-xs font-semibold text-slate-600">{label}</label>
      {children}
    </div>
  )
}
