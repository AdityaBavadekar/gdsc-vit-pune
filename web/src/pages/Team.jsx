import React from 'react';
import './team.css';

const TeamMember = ({member, nextMember}) => {
    const isLead = member.designation.toLowerCase().includes('lead');
    const shouldAddCoHeadHeader = (nextMember ?  nextMember.designation : '').toLowerCase().includes('co-head') && !member.designation.toLowerCase().includes('co-head');    

    return (
        <>
        {
            isLead && <div className='w-100'>
                <hr/>
                <p className='text-center fs-4 text-muted'>Lead</p>
            </div>
        }
        <div className="team-member rainbow-hover col-md-4 col-sm-12 w-sm-50 col-lg-3 py-4">
            <div>
                { 
                    member.image &&
                    <div className='img-container'>
                        <img src={`${member.image}`} alt={member.name} className='img-fluid'/>
                    </div>
                }
                <h3 className='fw-700 m-0'>{member.name.replace(' ', '\n')}</h3>
                <div className='d-flex'>
                    <div className='text-center my-auto p-0 m-0 d-none'>
                        <i className='opacity-75 fs-6 text-sm-center rounded py-1 px-2 my-1 mx-3 bg-secondary bg-gradient  ' style={{color: 'yellow'}}>
                            { member.domain.toLowerCase().includes('ai') && <i class="ri-robot-2-line"></i> }
                            { member.domain.toLowerCase().includes('app') && <i class="ri-smartphone-line"></i> }
                            { member.domain.toLowerCase().includes('web dev') && <i class="ri-macbook-line"></i> }
                            { member.domain.toLowerCase().includes('web3') && <i class="ri-lock-fill"></i> }
                            { member.domain.toLowerCase().includes('management') && <i class="ri-team-fill"></i> }
                            { member.domain.toLowerCase().includes('multimedia') && <i class="ri-image-ai-line"></i> }
                            { member.domain.toLowerCase().includes('content') && <i class="ri-file-text-line"></i> }
                            { member.domain.toLowerCase().includes('lead') && <i class="ri-account-pin-circle-fill"></i> }
                        </i>
                    </div>
                    <h4 className='text-muted fs-6 py-2 my-auto mx-auto'>
                        {member.role}
                    </h4>
                </div>
                
            </div>
            <div className="social-links fs-4">
                { member.linkedin && <a href={member.linkedin} target="_blank" rel="noopener noreferrer"><i class="ri-linkedin-fill" title='LinkedIn'></i></a> }
                { member.github && <a href={member.github} target="_blank" rel="noopener noreferrer"><i class="ri-github-fill" title='Github'></i></a> }
                { member.personal && <a href={member.personal} target="_blank" rel="noopener noreferrer"><i class="ri-global-fill" title='Personal website'></i></a>}
            </div>
        </div>
        {
            isLead && <div className='w-100'>
                <hr/>
                <p className='text-center fs-4 text-muted'>Heads</p>
            </div>
        }
        {
            shouldAddCoHeadHeader && <div className='w-100'>
                <hr/>
                <p className='text-center fs-4 text-muted'>Co-Heads</p>
            </div>
        }
        </>
    )
}

const Team = () => {
    const [otherTeamMembers, setTeamMembers] = React.useState([]);
    const [coreTeam, setCoreTeam] = React.useState([]);
    const [teamMetadata, setTeamMetadata] = React.useState([]);

    React.useEffect(() => {
        fetch('./data/current_team.json')
            .then(response => response.json())
            .then(data => {
                setTeamMetadata(data.metadata);
                setCoreTeam([...data.members.core]);
                setTeamMembers([...data.members.other]);
            });
    }, []);

    return (
        <div className="container py-5 px-0" id='team-page'>
            <h1 className='fw-800 display-3 text-center py-5'>Meet the Team for {teamMetadata.year}</h1>
            <div className="container">
                <h2 className='fw-700 text-center py-5'>Core Team <i className='font-monospace fst-normal'>({coreTeam.length})</i></h2>

                <div className="team-container">
                    {coreTeam.map((member, index) => <TeamMember member={member} key={index} nextMember={index == coreTeam.length - 1 ? null : coreTeam[index+1]} /> )}
                </div>
            </div>

            <div className="container">
                <h2 className='fw-700 text-center py-5'>Coordinators <i className='font-monospace fst-normal'>({otherTeamMembers.length})</i></h2>

                <div className="team-container">
                    {otherTeamMembers.map((member, index) => {
                        const prevWasDiff = index == 0 || otherTeamMembers[index-1].role !== member.role;
                        return (
                            <>
                                { prevWasDiff && <div className='w-100'><p className='text-center fs-4 text-muted'>{member.domain}</p></div> }
                                <TeamMember member={member} key={index}/>
                            </>
                        );
                    })}
                </div>
            </div>

        </div>
    );
};

export default Team;