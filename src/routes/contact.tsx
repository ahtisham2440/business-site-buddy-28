import { createFileRoute } from '@tanstack/react-router';
import { useState, type FormEvent } from 'react';
import { ArrowUpRight, Clock3, MapPin, MessageCircle, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
export const Route = createFileRoute('/contact')({
 head:()=>({meta:[{title:'Contact Flowline — Let’s talk plumbing'},{name:'description',content:'Contact Flowline about plumbing repairs and installations in Karachi. Share your name, phone, and message.'},{property:'og:title',content:'Contact Flowline — Let’s get it sorted'},{property:'og:description',content:'Start a conversation about your plumbing needs in Karachi.'},{property:'og:type',content:'website'},{name:'twitter:card',content:'summary_large_image'}]}),
 component:ContactPage,
});
function ContactPage(){
 const [submitted,setSubmitted]=useState(false);
 function handleSubmit(event:FormEvent<HTMLFormElement>){event.preventDefault();setSubmitted(true);}
 return <><section className="page-intro"><div className="container"><p className="eyebrow">GET IN TOUCH</p><h1>Let’s get it sorted.</h1><p>A little repair or a bigger plan? Tell us what you have in mind.</p></div></section>
 <section className="section"><div className="container contact-grid"><div className="contact-info"><h2>A conversation is a good start.</h2><p>Share what’s happening and where you’re based. We’ll help you work out the next step.</p><div className="contact-detail"><Phone/><div><h3>Give us a call</h3><p>Phone number to be added</p></div></div><div className="contact-detail"><MapPin/><div><h3>Our neighbourhood</h3><p>Karachi, Pakistan<br/>Street address to be added</p></div></div><div className="contact-detail"><Clock3/><div><h3>Opening hours</h3><p>Hours to be confirmed</p></div></div><Button asChild variant="outline" size="lg"><a href="https://wa.me/NUMBER" target="_blank" rel="noopener noreferrer"><MessageCircle/> WhatsApp us <ArrowUpRight/></a></Button><p className="form-note">WhatsApp number pending. This link will work once the business number is supplied.</p></div>
 <form className="contact-form" onSubmit={handleSubmit}><h2>Send us a message</h2><label htmlFor="name">Name<input id="name" name="name" autoComplete="name" placeholder="Your name" required onChange={()=>setSubmitted(false)}/></label><label htmlFor="phone">Phone<input id="phone" name="phone" type="tel" autoComplete="tel" placeholder="Your phone number" required onChange={()=>setSubmitted(false)}/></label><label htmlFor="message">Message<textarea id="message" name="message" placeholder="How can we help?" required onChange={()=>setSubmitted(false)}/></label><Button type="submit" size="lg">Send <ArrowUpRight/></Button><p className="form-note">Sample form only. Messages are not sent or stored.</p>{submitted&&<p className="form-status" role="status">Your form is complete. This is a demonstration, so no message has been sent. The business contact details are still to be added.</p>}</form></div></section></>;
}
