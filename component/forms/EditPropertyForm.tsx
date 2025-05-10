import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Switch } from '@/components/ui/switch';
import { MapPin, MessageCircleIcon, PhoneIcon, X } from 'lucide-react';
import Image from 'next/image';
import React from 'react';

// Define the type for TenantCard props
interface TenantCardProps {
  imageSrc: string;
  name: string;
  age: string;
  gender: string;
  agentId: string;
}

// Reusable component for displaying tenant details
const TenantCard: React.FC<TenantCardProps> = ({ imageSrc, name, age, gender, agentId }) => (
  <div className="flex justify-between items-center py-4 space-x-10">
    <div className="flex gap-4 items-center">
      <Image src={imageSrc} alt={name} width={100} height={100} />
      <div className="flex-col">
        <h2>{name}</h2>
        <h2>
          {age}, {gender}
        </h2>
        <h2>Single</h2>
        <span className="item-center flex gap-5">
          <PhoneIcon className="w-4 h-4" />
          <MessageCircleIcon className="w-4 h-4" />
        </span>
      </div>
    </div>
    <div className="space-y-3">
      <h2>Agent ID: {agentId}</h2>
      <div className="flex gap-4 items-center">
        <Button className='bg-blue-950 cursor-pointer text-white p-4 hover:bg-blue-900'>Accept</Button>
        <Button className='bg-blue-950 cursor-pointer text-white p-4 hover:bg-blue-900'>Decline</Button>
      </div>
    </div>
  </div>
);

const EditPropertyForm = () => {
  return (
    <div className="flex flex-col gap-4 p-5 w-8xl mx-auto">
      {/* Featured Image */}
      <Image
        src="/assets/img/jodex-featured-image.jpg"
        alt="Jodex House"
        width={500}
        height={500}
        className="rounded-lg shadow-lg"
      />

      {/* Property Details */}
      <div className="space-y-2">
        <h2 className="text-3xl text-blue-950 font-light">2 Bedrooms Apartment</h2>
        <div className="flex items-center gap-6">
          <h2 className="inline-flex gap-1 text-xl font-light">
            <MapPin width="20px" height="20px" /> D12 Market, Abuja
          </h2>
          <h2 className="text-xl font-light">Listed on 12/12/2023</h2>
        </div>
        <h2 className="text-3xl text-blue-950 font-bold">₦1,000,000/Year</h2>
        <h2 className="text-xl font-light">Property Condition: Good</h2>
      </div>

      {/* Features */}
      <div className="space-y-2">
        <h2 className="text-[20px] font-bold">Features</h2>
        <div className="flex items-center gap-5">
          {['Gym', 'Laundry', 'Parking', 'Garden'].map((feature) => (
            <Badge
              key={feature}
              className="border-2 border-blue-950 bg-black/0 text-blue-950 px-4 py-2 text-[16px] cursor-pointer"
            >
              {feature} <X className="h-16 w-16" />
            </Badge>
          ))}
        </div>

        {/* Charges */}
        <div className="flex justify-between items-center mb-5 mt-10">
          <div className="space-y-3">
            {['Agency (5%)', 'Legal (10%)', 'Service Charge', 'Caution Fee'].map((charge, index) => (
              <h2 key={index}>{charge}</h2>
            ))}
          </div>
          <div className="space-y-3">
            {['₦300,000', '₦100,000', '₦50,000', '₦50,000'].map((amount, index) => (
              <h2 key={index}>{amount}</h2>
            ))}
          </div>
        </div>
      </div>

      {/* Rent Duration */}
      <div>
        <h2 className="text-[20px] font-bold mb-3">Rent Duration</h2>
        <Select>
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Select duration" />
          </SelectTrigger>
          <SelectContent>
            {['Monthly', 'Quarterly', 'Semi-Annually', 'Annually', 'Bi-Annually'].map((duration) => (
              <SelectItem key={duration} value={duration}>
                {duration}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <div className="flex gap-4 justify-between items-center mt-5">
          <Button className='bg-blue-950 cursor-pointer text-white p-4 hover:bg-blue-900'>Boost Post</Button>
          <div>
            Available <Switch defaultChecked className="data-[state=checked]:bg-green-500" />
          </div>
        </div>
      </div>

      {/* Bookings */}
      <div>
        <h2 className="text-[20px] font-bold mb-3">See Bookings</h2>
        <div>
          <TenantCard
            imageSrc="/assets/img/jodex-tenant-img-1.jpg"
            name="John Doe"
            age="23"
            gender="Male"
            agentId="#244363"
          />
          <TenantCard
            imageSrc="/assets/img/jodex-tenant-img-2.jpg"
            name="Jane Smith"
            age="25"
            gender="Female"
            agentId="#244364"
          />
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex justify-between items-center py-4 space-x-10">
        <Button className='bg-white cursor-pointer border-2 border-blue-950 text-blue-950 p-10 hover:bg-blue-950 hover:text-white hover:border-none'>Discard</Button>
        <Button className='bg-blue-950 cursor-pointer text-white p-10 hover:bg-blue-900'>Save</Button>
      </div>
    </div>
  );
};

export default EditPropertyForm;
