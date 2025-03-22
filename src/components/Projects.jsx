// components/Projects.js
import React from 'react';

function Projects() {
    const projects = [
        {
            id: 1,
            category: 'Environment',
            title: 'Community Garden Restoration',
            description: 'Revitalizing abandoned spaces into thriving community gardens to improve food security.',
            volunteers: 12,
            organizations: 2
        },
        {
            id: 2,
            category: 'Education',
            title: 'Digital Literacy for Seniors',
            description: 'Teaching essential digital skills to elderly community members to bridge the digital divide.',
            volunteers: 15,
            organizations: 1
        },
        {
            id: 3,
            category: 'Health',
            title: 'Mental Health Awareness Campaign',
            description: 'Raising awareness and reducing stigma around mental health issues in local communities.',
            volunteers: 20,
            organizations: 3
        }
    ];

    return (
        <section className="projects">
            <div className="container">
                <div className="section-header">
                    <h2>Featured Projects</h2>
                    <p>Join these initiatives making a difference in communities</p>
                </div>
                <div className="projects-grid">
                    {projects.map(project => (
                        <div className="project-card" key={project.id}>
                            <div className="project-image">Project Image Placeholder</div>
                            <div className="project-content">
                                <span className="project-category">{project.category}</span>
                                <h3>{project.title}</h3>
                                <p>{project.description}</p>
                                <div className="project-meta">
                                    <span>{project.volunteers} Volunteers</span>
                                    <span>{project.organizations} Organization{project.organizations !== 1 ? 's' : ''}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Projects;