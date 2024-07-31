import { format } from 'date-fns';

const MoodBar = ({ mood }) => {

    const barHeight = mood.intensity * 20;
    const barDate = format(new Date(mood.createdAt), "h:mmaaa - EEEE, do MMMM yyyy");
    const barTitle = `Intensity Level: ${mood.intensity}\nMood: ${mood.moodType}\nNotes: ${mood.notes}\n${barDate}`;

    return (
        <div className="mood-bar" style={{ height: barHeight }} title={barTitle}>{mood.moodType}</div>
    );
};

export default MoodBar;