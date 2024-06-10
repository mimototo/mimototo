import * as React from "react";

import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card";
import { Label } from "~/components/ui/label";

export default async function Page() {
  return (
    <Card className="w-auto">
      <CardHeader>
        <CardTitle>Web開発</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid w-full items-center gap-8">
          <div className="flex flex-col space-y-4">
            <Card className="w-auto">
              <CardHeader>
                <Label htmlFor="name">言語</Label>
              </CardHeader>
              <CardContent>
                <div className="grid w-full items-center gap-4">
                  <div className="flex flex-col space-y-4">
                    <Label htmlFor="name">React</Label>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="w-auto">
              <CardHeader>
                <Label htmlFor="name">フレームワーク</Label>
              </CardHeader>
              <CardContent>
                <div className="grid w-full items-center gap-4">
                  <div className="flex flex-col space-y-1.5">
                    <Label htmlFor="name">Go</Label>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
