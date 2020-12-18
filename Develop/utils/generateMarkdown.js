// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ##Table of Contents
  * [Description](#Description)
  * [Installation](#Installation-Instructions)
  * [Usage Instructions](#Usage-Instructions)
  * [License](#License)
  * [Contributors](#Contributors)
  * [Testing](#Test)
  ## Description
  ${data.Description}
  ## Installation Instructions 
  ${data.Installation}
  ## Usage Instructions
  ${data.Usage}
  ## License
  ${data.License}
  ## Contributors
  ${data.Contributors}
  ## Testing 
   ${data.Test}
`;
}

module.exports = generateMarkdown;
