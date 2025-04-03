
import React from 'react';
import PixelContainer from './PixelContainer';
import PixelButton from './PixelButton';
import PixelHeading from './PixelHeading';

interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  imageUrl?: string;
  projectUrl?: string;
}

const ProjectCard = ({
  title,
  description,
  technologies,
  imageUrl = '/placeholder.svg',
  projectUrl
}: ProjectCardProps) => {
  return (
    <PixelContainer type="card" className="h-full flex flex-col">
      <div className="mb-4 relative overflow-hidden h-40 pixel-borders">
        <img 
          src={imageUrl} 
          alt={title} 
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="flex-1">
        <PixelHeading level={3} className="mb-2">{title}</PixelHeading>
        
        <p className="font-pixel-secondary mb-4 text-retro-lightgray text-sm">
          {description}
        </p>
        
        <div className="mb-4">
          <div className="flex flex-wrap gap-2">
            {technologies.map((tech, index) => (
              <span 
                key={index} 
                className="inline-block px-2 py-1 text-xs font-pixel-secondary bg-retro-darkblue"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
      
      {projectUrl && (
        <div className="mt-auto">
          <PixelButton 
            type="secondary"
            className="w-full"
            onClick={() => window.open(projectUrl, '_blank')}
          >
            VIEW PROJECT
          </PixelButton>
        </div>
      )}
    </PixelContainer>
  );
};

export default ProjectCard;
