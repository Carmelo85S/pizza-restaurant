
import React from 'react';
import { MapPin, Clock, Phone, Mail } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="section-padding bg-crust-100">
      <div className="container-custom">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-pizza-600 font-medium">Find Us</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2">Visit Our Restaurant</h2>
          <p className="text-gray-600 mt-4">
            Come experience our warm atmosphere and delicious food. We're located in the heart of the city.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          <div className="lg:col-span-3 rounded-lg overflow-hidden shadow-md">
            <iframe
              title="Prima Napoletana Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2035.3999297255568!2d18.257132900000002!3d59.32627660000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x465f8315863684a3%3A0x11eec3e60a9e07f2!2sPrima%20Napoletana!5e0!3m2!1ssv!2sse!4v1743951425647!5m2!1ssv!2sse"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
              <div className="flex items-start">
                <div className="bg-pizza-50 p-3 rounded-full">
                  <MapPin className="h-6 w-6 text-pizza-600" />
                </div>
                <div className="ml-4">
                  <h3 className="font-serif font-bold text-lg">Address</h3>
                  <address className="not-italic text-gray-600 mt-1">
                    orminge 2, 132 30<br />
                    Saltsjö-boo
                  </address>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
              <div className="flex items-start">
                <div className="bg-pizza-50 p-3 rounded-full">
                  <Clock className="h-6 w-6 text-pizza-600" />
                </div>
                <div className="ml-4">
                  <h3 className="font-serif font-bold text-lg">Hours</h3>
                  <div className="text-gray-600 mt-1">
                    <p>Monday - Thursday: 11:00am - 10:00pm</p>
                    <p>Friday - Saturday: 11:00am - 11:00pm</p>
                    <p>Sunday: 12:00pm - 9:00pm</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
              <div className="flex justify-between items-center">
                <div className="bg-pizza-50 p-3 rounded-full">
                <Phone className="h-6 w-6 text-pizza-600" />
                </div>
                <div className="ml-4">
                  <h3 className="font-serif font-bold text-lg">Phone</h3>
                  <div className="text-gray-600 text-sm mt-1">
                    07345678910
                  </div>
                </div>
                <div className="bg-pizza-50 p-3 rounded-full">
                    <Mail className="h-6 w-6 text-pizza-600" />
                  </div>
                  <div className="ml-4">
                    <h3 className="font-serif font-bold text-lg">Email</h3>
                    <a className="text-gray-600 text-sm mt-1">
                      info@carmelospizza.com
                    </a>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
