// components/HeaderCard.jsx
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, Mail, Phone, MessageCircle, MapPin } from "lucide-react";

export default function HeaderCard() {
  return (
    <Card className="bg-white border border-cyan-200 shadow-xl card-hover">
      <CardContent className="p-6">
        <section>
          <h1 className="text-5xl font-extrabold text-cyan-700 mb-1">
            Shuai Gao
          </h1>
          <p className="text-base text-gray-600 mb-4 flex items-center gap-1.5">
            <MapPin size={18} aria-hidden />
            Calgary, AB, CA
          </p>
          <div className="flex gap-4 flex-wrap mb-4">
            <Button asChild variant="outline">
              <a href="mailto:gaoshuai099@gmail.com">
                <Mail className="mr-2" size={18} /> Email
              </a>
            </Button>
            <Button asChild variant="outline">
              <a href="https://github.com/Shuai99999" target="_blank">
                <Github className="mr-2" size={18} /> GitHub
              </a>
            </Button>
            <Button asChild variant="outline">
              <a href="tel:+15878760888">
                <Phone className="mr-2" size={18} /> 587-876-0888
              </a>
            </Button>
            <Button asChild variant="outline">
              <a
                href="https://wa.me/15878760888"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className="mr-2" size={18} /> WhatsApp
              </a>
            </Button>
          </div>
          <p className="text-lg text-gray-700">
            Cloud & Database Architect | DevOps | Full Stack Engineer
            <br />
            <br />
            Senior Database & Cloud Infrastructure Leader with 16 years of
            enterprise DBA experience and 8 years leading cloud computing teams
            at Haier Group. Extensive expertise in high-availability systems,
            cloud architecture, and data center modernization. <br />
            Passionate about modern software development with hands-on
            experience in MERN stack (MongoDB, Express, React, Node.js),
            building full-stack applications and automation tools. Strong
            foundation in backend logic, API design, DevOps practices, and
            scalable system architecture. <br />
            Bringing a unique blend of enterprise infrastructure leadership and
            modern full-stack development skills.
          </p>
        </section>
      </CardContent>
    </Card>
  );
}
