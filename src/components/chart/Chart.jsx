import "./chart.css"
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

export default function Chart() {
    // Dummy data

    const data = [
        {
            name: 'Camera A',
            time: '1'
        },
        {
            name: 'Camera B',
            time: '3'
        },
        {
            name: 'Camera C',
            time: '4'
        },
        {
            name: 'Camera D',
            time: '2'
        },
        {
            name: 'Camera E',
            time: '8'
        },
        {
            name: 'Camera F',
            time: '4'
        },
        {
            name: 'Camera G',
            time: '5'
        },
      ];

  return (
    <div className="Chart">
        <h3 className="Title">
            Camera Health
        </h3>
        {/* We need a Responsive Container whihc holds all the data, a Line Chart with 
        X and Y asis, data key to indicate which value to store in there
        A line of type monotone to actually hold all of it */}
        {/* Aspect means for width = 4, height = 1 */}
        {/* Tootltip is used so that when you hover you see values for those points */}
            <ResponsiveContainer width= "100%" aspect={4/1}>
                <LineChart data={data}>
                    <XAxis dataKey="name">
                        Cameras
                    </XAxis>
                   
                    <YAxis dataKey="time">
                        Amount
                    </YAxis>
                    
                    <Line type="monotone" dataKey="time">
                    </Line>
                    <Tooltip></Tooltip>
                    
                </LineChart>
            </ResponsiveContainer>
    </div>
  );
}
