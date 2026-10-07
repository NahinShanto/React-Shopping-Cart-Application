export default function ToastContainer({ toasts, onDismiss }) {
  return (
    <div className="toast-wrap" aria-live="polite">
      {toasts.map((t) => (
        <div key={t.id} className={`toast toast--${t.type}`} role="status">
          <span className="toast__icon" aria-hidden="true">{t.type === "success" ? "✓" : "!"}</span>
          <p className="toast__msg">{t.message}</p>
          <button className="toast__close" onClick={() => onDismiss(t.id)} aria-label="Dismiss message">×</button>
        </div>
      ))}
    </div>
  );
}
