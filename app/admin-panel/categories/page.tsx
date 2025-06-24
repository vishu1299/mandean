import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Plus, Command } from "lucide-react";

export default function Component() {
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-2">
            <Command className="w-5 h-5 text-gray-500" />
            <h1 className="text-xl font-medium text-gray-700">Categories</h1>
          </div>
          <Button
            variant="outline"
            className="text-blue-500 border-blue-200 hover:bg-blue-50"
          >
            <Plus className="w-4 h-4 mr-2" />
            Add new category
          </Button>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Web Development Card */}
          <Card className="overflow-hidden border-0 shadow-sm hover:shadow-md transition-shadow cursor-pointer">
            <CardContent className="p-0">
              <div className="aspect-video relative">
                <Image
                  src="/trendingnow.png"
                  alt="Web Development - coding on laptop"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="text-gray-600 font-medium">Web Development</h3>
              </div>
            </CardContent>
          </Card>

          {/* Finance Card */}
          <Card className="overflow-hidden border-0 shadow-sm hover:shadow-md transition-shadow cursor-pointer">
            <CardContent className="p-0">
              <div className="aspect-video relative">
                <Image
                  src="/trendingnow.png"
                  alt="Finance - compass and money"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="text-gray-600 font-medium">Finance</h3>
              </div>
            </CardContent>
          </Card>

          {/* Test English Card */}
          <Card className="overflow-hidden border-0 shadow-sm hover:shadow-md transition-shadow cursor-pointer">
            <CardContent className="p-0">
              <div className="aspect-video relative">
                <Image
                  src="/trendingnow.png"
                  alt="English - students studying together"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="text-gray-600 font-medium">Test English</h3>
              </div>
            </CardContent>
          </Card>

          {/* Social Studies Card */}
          <Card className="overflow-hidden border-0 shadow-sm hover:shadow-md transition-shadow cursor-pointer">
            <CardContent className="p-0">
              <div className="aspect-video relative">
                <Image
                  src="/trendingnow.png"
                  alt="Social Studies - historical books and globe"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="text-gray-600 font-medium">Social studies</h3>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
