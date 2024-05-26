"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import { Github, Instagram, X } from "lucide-react";
import ToolbarButton from "~/app/components/ToolbarButton";
import { Button } from "~/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "~/components/ui/popover";

export default function UserMenu() {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button size="icon" variant="ghost" className="rounded-full" asChild>
          <Avatar>
            <AvatarImage
              src="https://pbs.twimg.com/profile_images/1580913575240925186/keU-mf7g_400x400.jpg"
              alt="@Mimototo"
              className="rounded-full object-cover"
            />
            <AvatarFallback>me</AvatarFallback>
          </Avatar>
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-80">
        <div className="flex gap-4">
          <Avatar className="w-24 h-24">
            <AvatarImage
              src="https://pbs.twimg.com/profile_images/1580913575240925186/keU-mf7g_400x400.jpg"
              alt="@Mimototo"
              className="rounded-sm object-cover"
            />
            <AvatarFallback>me</AvatarFallback>
          </Avatar>
          <div className="space-y-2">
            <h4 className="text-xl font-medium leading-none">mimoto</h4>
            <p className="text-sm text-muted-foreground">人生備忘録🐈</p>
            <ToolbarButton
              href="https://x.com/mimototo_"
              icon={<X />}
              title="X"
            />
            <ToolbarButton
              href="https://github.com/mimototo"
              icon={<Github />}
              title="github"
            />
            <ToolbarButton
              href="https://instagram.com/mimototo__"
              icon={<Instagram />}
              title="settings"
            />
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
}
