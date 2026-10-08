import { Link, useRouterState } from '@tanstack/react-router';
import { useState } from 'react';
import { ArrowUpRight, Clock3, Droplets, MapPin, Menu, Phone, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: state => state.location.pathname });
  return <>
    <div className="topline"><div className="container"><p><MapPin size={13} /> Your local plumbing team in Karachi</p><p>Good people. Great plumbing.</p></div></div>
    <header className="site-header"><div className="container header-inner">
      <Link to="/" className="wordmark" onClick={() => setOpen(false)} aria-label="Flowline home"><Droplets className="brand-icon" /><span>flowline<span className="wordmark-sub">PLUMBING & CARE</span></span></Link>
      <nav className="desktop-nav" aria-label="Main navigation">
        <Link to="/" activeOptions={{exact:true}} activeProps={{className:'nav-active'}}>Home</Link>
        <Link to="/about" activeProps={{className:'nav-active'}}>About us</Link>
        <Link to="/services" activeProps={{className:'nav-active'}}>Services</Link>
        <Link to="/contact" activeProps={{className:'nav-active'}}>Contact</Link>
      </nav>
      <Button asChild size="lg" className="header-cta"><Link to="/contact">Let’s talk <ArrowUpRight /></Link></Button>
      <Button variant="ghost" size="icon" className="mobile-menu" aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open} onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</Button>
    </div>{open && <nav className="mobile-nav container" aria-label="Mobile navigation">{([{to:'/',label:'Home'},{to:'/about',label:'About us'},{to:'/services',label:'Services'},{to:'/contact',label:'Contact'}] as const).map(item => <Link key={item.to} to={item.to} className={pathname===item.to?'nav-active':''} onClick={() => setOpen(false)}>{item.label}<ArrowUpRight size={16}/></Link>)}</nav>}</header>
  </>;
}

export function SiteFooter() {
  return <footer className="site-footer"><div className="container footer-grid">
    <div><Link to="/" className="wordmark"><Droplets className="brand-icon" /><span>flowline<span className="wordmark-sub">PLUMBING & CARE</span></span></Link><p className="footer-description">A little care goes a long way.<br/>Plumbing for the place you call home.</p></div>
    <div><h2>Explore</h2><Link to="/">Home</Link><Link to="/about">About us</Link><Link to="/services">Our services</Link><Link to="/contact">Contact</Link></div>
    <div><h2>Find us</h2><p><Phone size={15}/> Phone number to be added</p><p><MapPin size={15}/> Karachi, Pakistan<br/>Street address to be added</p></div>
    <div><h2>Opening hours</h2><p><Clock3 size={15}/> Hours to be confirmed</p><p>Get in touch to arrange a visit.</p></div>
  </div><div className="container footer-bottom"><p>© {new Date().getFullYear()} Flowline Plumbing. All rights reserved.</p><p>Sample business · Contact details pending</p></div></footer>;
}

export function ContactBand() {
  return <section className="contact-band"><div className="container"><div><p className="eyebrow">LET’S GET IT SORTED</p><h2>A better day starts with<br/>one less thing to worry about.</h2></div><Button asChild size="lg" variant="secondary"><Link to="/contact">Get in touch <ArrowUpRight /></Link></Button></div></section>;
}
