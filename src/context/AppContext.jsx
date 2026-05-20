import { createContext, useCallback, useContext, useMemo, useState } from 'react'

const WISHLIST_KEY = 'luxe-wishlist'

function loadWishlist() {
  try {
    const raw = localStorage.getItem(WISHLIST_KEY)
    return raw ? JSON.parse(raw) : []
  } catch {
    return []
  }
}

const AppContext = createContext(null)

export function AppProvider({ children }) {
  const [wishlist, setWishlist] = useState(loadWishlist)
  const [toast, setToast] = useState(null)
  const [searchFilters, setSearchFilters] = useState({
    neighborhood: '',
    propertyType: '',
    budget: '',
  })

  const showToast = useCallback((message, type = 'success') => {
    setToast({ message, type, id: Date.now() })
    setTimeout(() => setToast(null), 3200)
  }, [])

  const toggleWishlist = useCallback((slug, title) => {
    setWishlist((prev) => {
      const isRemoving = prev.includes(slug)
      const next = isRemoving ? prev.filter((s) => s !== slug) : [...prev, slug]
      localStorage.setItem(WISHLIST_KEY, JSON.stringify(next))
      showToast(
        isRemoving ? `${title} removed from wishlist` : `❤️ ${title} saved to wishlist`,
        isRemoving ? 'info' : 'success',
      )
      return next
    })
  }, [showToast])

  const isWishlisted = useCallback((slug) => wishlist.includes(slug), [wishlist])

  const applySearch = useCallback((filters) => {
    setSearchFilters(filters)
    showToast('Showing matching homes below ✨', 'success')
    document.getElementById('recommended')?.scrollIntoView({ behavior: 'smooth' })
  }, [showToast])

  const value = useMemo(
    () => ({
      wishlist,
      toggleWishlist,
      isWishlisted,
      toast,
      showToast,
      searchFilters,
      setSearchFilters,
      applySearch,
    }),
    [wishlist, toggleWishlist, isWishlisted, toast, showToast, searchFilters, applySearch],
  )

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>
}

export function useApp() {
  const ctx = useContext(AppContext)
  if (!ctx) throw new Error('useApp must be used within AppProvider')
  return ctx
}
