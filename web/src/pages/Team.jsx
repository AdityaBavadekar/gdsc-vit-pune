import React from 'react';
import './team.css';

const TeamMember = ({member}) => {
    const isLead = member.role.toLowerCase().includes('lead');
    return (
        <>
        {
            isLead && <div className='w-100'>
                <hr/>
                <p className='text-center fs-4 text-muted'>Lead</p>
            </div>
        }
        <div className="team-member col-md-4 col-sm-12 col-lg-3">
            <img src={`${member.image}`} alt={member.name} className='img-fluid'/>
            <h3 className='fw-700'>{member.name}</h3>
            <h4 className='text-muted fs-4 my-2'>{member.role}</h4>
            <div className="social-links fs-4">
                <a href={member.linkedin} target="_blank" rel="noopener noreferrer"><i class="ri-linkedin-fill" title='LinkedIn'></i></a>
                <a href={member.github} target="_blank" rel="noopener noreferrer"><i class="ri-github-fill" title='Github'></i></a>
                <a href={member.personal} target="_blank" rel="noopener noreferrer"><i class="ri-global-fill" title='Personal website'></i></a>
            </div>
        </div>
        {
            isLead && <div className='w-100'>
                <hr/>
                <p className='text-center fs-4 text-muted'>Heads</p>
            </div>
        }
        </>
    )
}

const Team = () => {
    const [teamMembers, setTeamMembers] = React.useState([]);
    const [coreTeam, setCoreTeam] = React.useState([]);
    const [teamMetadata, setTeamMetadata] = React.useState([]);

    React.useEffect(() => {
        fetch('./data/team.json')
            .then(response => response.json())
            .then(data => {
                var coreTeamMembers = [];
                var otherTeamMembers = [];

                setTeamMetadata(data.metadata);
                data.members.forEach(member => {
                    const role = member.role.toLowerCase();
                    if (role.includes('head') || role.includes('lead')) {
                        coreTeamMembers.push(member);
                    }else{
                        otherTeamMembers.push(member);
                    }
                })
                setCoreTeam(coreTeamMembers);
                setTeamMembers(otherTeamMembers);
            });
    }, []);

    return (
        <div className="container">
            <h1 className='fw-700 text-center py-5'>Meet the Team for {teamMetadata.year}</h1>
            <div className="container">
                <h2 className='fw-700 text-center py-5'>Core Team ({coreTeam.length})</h2>

                <div className="team-container">
                    {coreTeam.map((member, index) => <TeamMember member={member} key={index}/>)}
                </div>
            </div>

            <div className="container">
                <h2 className='fw-700 text-center py-5'>Coordinators ({teamMembers.length})</h2>

                <div className="team-container">
                    {teamMembers.map((member, index) => <TeamMember member={member} key={index}/>)}
                </div>
            </div>

        </div>
    );
};

export default Team;