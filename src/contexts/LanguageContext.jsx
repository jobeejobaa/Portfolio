import { createContext, useContext, useState } from "react"
import translations from "../i18n/translations"

// 1. Créer le contexte
const LanguageContext = createContext(null)

// 2. Le Provider — wrappera toute l'app
export function LanguageProvider({ children }) {
  const [lang, setLang] = useState("fr")

  // t("hero.role") → cherche translations[lang]["hero"]["role"]
  function t(key) {
    const keys = key.split(".")
    let value = translations[lang]
    for (const k of keys) {
      if (value === undefined) return key
      value = value[k]
    }
    return value ?? key
  }

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

// 3. Le hook — utilisé dans chaque composant
export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) throw new Error("useLanguage doit être utilisé dans <LanguageProvider>")
  return context
}
