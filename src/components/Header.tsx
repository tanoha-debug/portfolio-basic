'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'

const NAV_ITEMS = [
  { label: 'WORKS', href: '/#works' },
  { label: 'SKILL', href: '/#skill' },
  { label: 'ABOUT', href: '/#about' },
  { label: 'CONTACT', href: '/#contact' },
] as const

export default function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled || open
          ? 'bg-background/95 backdrop-blur border-b border-lightgray'
          : 'bg-transparent'
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 md:px-10">
        <Link
          href="/"
          className="text-base font-medium tracking-wide text-charcoal hover:text-dusty transition-colors"
          onClick={() => setOpen(false)}
        >
          YOUR NAME
        </Link>

        <nav className="hidden md:block">
          <ul className="flex items-center gap-8">
            {NAV_ITEMS.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-[13px] tracking-[0.12em] text-charcoal hover:text-dusty transition-colors"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <button
          type="button"
          className="md:hidden flex h-9 w-9 items-center justify-center"
          aria-label={open ? 'メニューを閉じる' : 'メニューを開く'}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="relative block h-3 w-5">
            <span
              className={`absolute left-0 top-0 h-px w-5 bg-charcoal transition-transform duration-300 ${
                open ? 'translate-y-[6px] rotate-45' : ''
              }`}
            />
            <span
              className={`absolute left-0 top-3 h-px w-5 bg-charcoal transition-transform duration-300 ${
                open ? '-translate-y-[6px] -rotate-45' : ''
              }`}
            />
          </span>
        </button>
      </div>

      <div
        className={`md:hidden overflow-hidden bg-background transition-[max-height] duration-300 ${
          open ? 'max-h-96 border-t border-lightgray' : 'max-h-0'
        }`}
      >
        <nav className="px-6 py-4">
          <ul className="flex flex-col gap-1">
            {NAV_ITEMS.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="block py-3 text-sm tracking-[0.12em] text-charcoal hover:text-dusty"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}
