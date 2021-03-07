import { CounterClient } from "../components/CounterClient";
import { Dynamic } from "../components/Dynamic";
import {Contact} from '../components/Contact'
import {AboutUs} from '../secondComponent/Slider'
import { Problems } from "../secondComponent/Problems";
import { Title } from "../secondComponent/Title";
import {UserCards } from "../secondComponent/Mentors";
import { GlassCard } from "./GlassCard";

export function SecondPage() {
  return (
    <div>
      <AboutUs />
      <Title />
      <Problems />
      <Dynamic />
      <CounterClient />
      <UserCards />
      
      <Contact />
    </div>
  );
}
