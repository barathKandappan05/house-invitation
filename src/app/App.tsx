import { Home, MapPin, Calendar, Clock } from "lucide-react";
import { Card } from "@/app/components/ui/card";

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-rose-50 flex items-center justify-center p-4">
      <Card className="max-w-2xl w-full overflow-hidden shadow-2xl">
        {/* Header Image */}
        <div className="relative h-64 overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1628744448839-a475cc0e90c3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBob21lJTIwZXh0ZXJpb3J8ZW58MXx8fHwxNzY4NDg2NTMyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="New Home"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
          <div className="absolute bottom-6 left-6 right-6">
            <div className="flex items-center gap-3 text-white">
              <div className="p-3 bg-white/20 backdrop-blur-sm rounded-full">
                <Home className="w-8 h-8" />
              </div>
              <div>
                <h1 className="text-4xl font-serif mb-1">
                  Housewarming
                </h1>
                <p className="text-lg text-white/90">
                  You're Invited!
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Invitation Content */}
        <div className="p-8 md:p-12 bg-white">
          <div className="text-center mb-8">
            <p className="text-lg text-gray-700 leading-relaxed">
              We're thrilled to invite you to celebrate our new
              home! Join us for an morning of warmth, laughter,
              and good company as we open our doors and hearts
              to friends and family.
            </p>
          </div>

          {/* Event Details */}
          <div className="space-y-6 mb-8">
            <div className="flex items-start gap-4 p-4 bg-amber-50 rounded-lg">
              <div className="p-2 bg-amber-100 rounded-full">
                <Calendar className="w-5 h-5 text-amber-700" />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-gray-900 mb-1">
                  Date
                </h3>
                <p className="text-gray-700">
                  Thursday, February 5, 2026
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 bg-orange-50 rounded-lg">
              <div className="p-2 bg-orange-100 rounded-full">
                <Clock className="w-5 h-5 text-orange-700" />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-gray-900 mb-1">
                  Time
                </h3>
                <p className="text-gray-700">
                  8:00 AM - 10:00 AM
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 bg-rose-50 rounded-lg">
              <div className="p-2 bg-rose-100 rounded-full">
                <MapPin className="w-5 h-5 text-rose-700" />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-gray-900 mb-1">
                  Address
                </h3>
                <p className="text-gray-700">
                  Block A-103, Sree Daksha Ilaria
                  <br />
                  Chinnavedampatti,
                  <br />
                  Thudiyalur to Saravanampatti Road
                  <br />
                  Coimbatore - 641049
                </p>
                <a
                  href="https://www.google.com/maps/dir//Thudiyalur+to+Saravanampatti,+Road,+Chinnavedampatti,+Coimbatore,+Tamil+Nadu+641049/@12.986246,77.7566516,15z/data=!4m8!4m7!1m0!1m5!1m1!1s0x3ba8f70c6568e795:0x15a32e84717f8e61!2m2!1d76.977373!2d11.0750215?entry=ttu&g_ep=EgoyMDI2MDExMy4wIKXMDSoKLDEwMDc5MjA3MUgBUAM%3D"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 mt-2 text-rose-600 hover:text-rose-700 underline text-sm"
                >
                  View on Google Maps
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Decorative Border */}
        <div className="h-2 bg-gradient-to-r from-amber-400 via-orange-400 to-rose-400" />
      </Card>
    </div>
  );
}