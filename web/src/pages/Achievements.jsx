import React from 'react';

const Achievements = () => {
    const achievements = [
        { id: 1, title: 'Achievement 1', description: 'Description of achievement 1' },
        { id: 2, title: 'Achievement 2', description: 'Description of achievement 2' },
        { id: 3, title: 'Achievement 3', description: 'Description of achievement 3' },
    ];

    return (
        <div>
            <h1>Achievements</h1>
            <ul>
                {achievements.map(achievement => (
                    <li key={achievement.id}>
                        <h2>{achievement.title}</h2>
                        <p>{achievement.description}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Achievements;