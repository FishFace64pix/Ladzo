import Link from 'next/link'
import { ButtonHTMLAttributes, forwardRef } from 'react'

type Variant = 'primary' | 'ghost' | 'dark'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant
  href?: string
  size?: 'sm' | 'md' | 'lg'
}

const variantStyles: Record<Variant, string> = {
  primary:
    'bg-gold text-navy hover:bg-gold/90 shadow-lg shadow-gold/20 hover:shadow-gold/40',
  ghost:
    'bg-transparent text-white border border-white/40 hover:border-white hover:bg-white/5',
  dark:
    'bg-navy text-white border border-gold/30 hover:border-gold hover:bg-navy/80',
}

const sizeStyles = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-sm',
  lg: 'px-8 py-4 text-base',
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = 'primary', size = 'md', href, className = '', children, ...props }, ref) => {
    const baseStyles =
      'inline-flex items-center justify-center gap-2 font-sans font-semibold rounded-sm transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-gold/50 disabled:opacity-60 disabled:cursor-not-allowed'

    const classes = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`

    if (href) {
      return (
        <Link href={href} className={classes}>
          {children}
        </Link>
      )
    }

    return (
      <button ref={ref} className={classes} {...props}>
        {children}
      </button>
    )
  }
)

Button.displayName = 'Button'

export default Button
