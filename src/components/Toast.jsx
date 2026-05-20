import { useApp } from '../context/AppContext'

function Toast() {
  const { toast } = useApp()

  if (!toast) return null

  return (
    <div className={`toast toast--${toast.type}`} role="status" aria-live="polite">
      {toast.message}
    </div>
  )
}

export default Toast
