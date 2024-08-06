import { Link } from "react-scroll";
import { Button } from "../../components/ui/button";

type TbuttonProps = {
  title: string;
  onClick?: () => void;
};

export default function CTAButton({ title }: TbuttonProps) {
  return (
    <Button
      asChild
      variant="outline"
      className="border-[#14a8e1] hover:text-#14a8e1 cursor-pointer dark:border-cornblue-500/80 text-[#14a8e1]  group relative inline-flex rounded-full border font-semibold backdrop-blur hover:bg-zinc-50 dark:text-white dark:hover:bg-zinc-800 dark:hover:text-white"
    >
      <Link
        to="contact"
        activeClass="active"
        smooth
        spy
        offset={-100}
        className="font-semibold text-lg "
      >
        {title}
      </Link>
    </Button>
  );
}