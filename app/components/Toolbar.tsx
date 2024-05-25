import {
  Code,
  GalleryVerticalEnd,
  Home,
  Notebook,
  UserRound,
} from "lucide-react";
import ToolbarButton from "~/app/components/ToolbarButton";
import UserMenu from "~/app/components/UserMenu";
import ToggleTheme from "./ToggleTheme";

export default function Toolbar() {
  return (
    <div className="fixed gap-2 bottom-10 left-1/2 -translate-x-1/2 flex items-center border shadow-lg rounded-full p-2 bg-muted/30 backdrop-blur">
      <UserMenu />
      <ToolbarButton href="/" icon={<Home />} title="top" />
      <ToolbarButton href="/about" icon={<UserRound />} title="about" />
      <ToolbarButton href="/skills" icon={<Code />} title="skills" />
      <ToolbarButton href="/articles" icon={<Notebook />} title="articles" />
      <ToolbarButton
        href="/works"
        icon={<GalleryVerticalEnd />}
        title="works"
      />
      <ToggleTheme />
    </div>
  );
}
