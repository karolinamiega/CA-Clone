import Event from "../Event/Event";
function EventWrapper() {
  return (
    <div className="Events-wrapper">
      <Event 
      imgLink="https://codeacademy.lt/wp-content/uploads/2022/10/MicrosoftTeams-image-20-768x768.png"
      date="10"
      month="Lap"
      place="Online"
      event="CodeAcademy Talents"
       />
    <Event 
      date="5"
      month="Rug"
      place="Online"
      event="Intro: Dirbtinis intelektas ir Duomenų mokslas"
       />
    </div>
  );
}
export default EventWrapper;
