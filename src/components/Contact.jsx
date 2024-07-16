import React from 'react';
import { Link } from 'react-router-dom';
import { FacebookIcon, GithubIcon, Mail, Phone, XIcon } from "lucide-react"
function Contact() {
  return (
      <div className="flex flex-col items-center justify-center min-h-[100dvh] bg-background px-4 py-12 sm:px-6 lg:px-8">
        <div className="max-w-md text-center space-y-4">
          <h1 className="text-3xl font-bold tracking-tight text-foreground">Get in Touch</h1>
          <p className="text-muted-foreground">
            We would love to hear from you! Reach out to us for any queries, feedback, or support.
          </p>
          <div className="space-y-2">
            <div className="flex items-center justify-center gap-2">
              <Mail className="h-5 w-5 text-muted-foreground" />
              <Link to="#" className="text-primary hover:underline">
                support@quiz-master.com
              </Link>
            </div>
            <div className="flex items-center justify-center gap-2">
              <Phone className="h-5 w-5 text-muted-foreground" />
              <Link to="#" className="text-primary hover:underline">
                +252 (61) 5-00-00-00
              </Link>
            </div>
          </div>
          <div className="flex items-center justify-center gap-4">
            <Link to="https://x.com/Modev40" target='_blank' className="text-muted-foreground hover:text-primary">
              <XIcon className="h-6 w-6" />
              <span className="sr-only">Twitter</span>
            </Link>
            <Link to="https://github.com/MoDev40" target='_blank' className="text-muted-foreground hover:text-primary">
              <GithubIcon className="h-6 w-6" />
              <span className="sr-only">GitHub</span>
            </Link>
          </div>
        </div>
      </div>
  );
}

export default Contact;
