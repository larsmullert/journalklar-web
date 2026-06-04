'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'

const links = [
  { label: 'Sådan virker det', href: '/saadan-virker-journalklar' },
  { label: 'Tilgang', href: '/tilgang' },
  { label: 'Sikkerhed', href: '/sikkerhed' },
  { label: 'Bag om', href: '/om' },
]

export default function MobileMenu() {
  const [open, setOpen] = useState(false)
  const [navHeight, setNavHeight] = useState(0)
  const menuRef = useRef<HTMLDivElement>(null)

  // Measure nav height so the dropdown can sit exactly below it
  useEffect(() => {
    const nav = document.querySelector('nav')
    if (!nav) return
    const update = () => setNavHeight(nav.getBoundingClientRect().height)
    update()
    const observer = new ResizeObserver(update)
    observer.observe(nav)
    return () => observer.disconnect()
  }, [])

  // Close on outside click
  useEffect(() => {
    if (!open) return
    function handleClickOutside(e: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [open])

  return (
    <div ref={menuRef} className="md:hidden">
      {/* Hamburger button */}
      <button
        onClick={() => setOpen((prev) => !prev)}
        aria-label={open ? 'Luk menu' : 'Åbn menu'}
        aria-expanded={open}
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          gap: 5,
          width: 24,
          height: 24,
          background: 'none',
          border: 'none',
          cursor: 'pointer',
          padding: 0,
        }}
      >
        <span style={{ display: 'block', width: 24, height: 2, backgroundColor: '#1D3A2F' }} />
        <span style={{ display: 'block', width: 24, height: 2, backgroundColor: '#1D3A2F' }} />
        <span style={{ display: 'block', width: 24, height: 2, backgroundColor: '#1D3A2F' }} />
      </button>

      {/* Dropdown — fixed below the nav bar */}
      {open && navHeight > 0 && (
        <div
          style={{
            position: 'fixed',
            top: navHeight,
            left: 0,
            right: 0,
            backgroundColor: '#F7F4EF',
            borderBottom: '1px solid #E8E4DF',
            zIndex: 499,
          }}
        >
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              style={{
                display: 'block',
                padding: '1rem 1.5rem',
                fontFamily: 'var(--font-source-sans), system-ui, sans-serif',
                fontSize: 16,
                fontWeight: 300,
                color: '#1D3A2F',
                textDecoration: 'none',
                borderBottom: '1px solid rgba(29, 58, 47, 0.12)',
              }}
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}
