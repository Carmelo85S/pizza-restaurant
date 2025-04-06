
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
              title="Restaurant Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.2169559864793!2d-73.98780542342437!3d40.75795593440436!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25855a96da09d%3A0x860bf5a5e1a00a68!2sTimes%20Square%2C%20New%20York%2C%20NY%2010036%2C%20USA!5e0!3m2!1sen!2sca!4v1649887621594!5m2!1sen!2sca"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen={false}
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
                    123 Pizza Street<br />
                    New York, NY 10001
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
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
                <div className="flex items-start">
                  <div className="bg-pizza-50 p-3 rounded-full">
                    <Phone className="h-6 w-6 text-pizza-600" />
                  </div>
                  <div className="ml-4">
                    <h3 className="font-serif font-bold text-lg">Phone</h3>
                    <p className="text-gray-600 mt-1">
                      (212) 555-1234
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
                <div className="flex items-start">
                  <div className="bg-pizza-50 p-3 rounded-full">
                    <Mail className="h-6 w-6 text-pizza-600" />
                  </div>
                  <div className="ml-4">
                    <h3 className="font-serif font-bold text-lg">Email</h3>
                    <p className="text-gray-600 mt-1">
                      info@bellapizza.com
                    </p>
                  </div>
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
