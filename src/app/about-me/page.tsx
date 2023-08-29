export default withClient({
  AboutMe: {
  },
});

export default function AboutMe() {
  return (
    <main className="max-w-5xl mx-auto p-4 sm:p-8 mb-16 grid gap-16">
      <header className="flex flex-col items-center gap-2 py-8">
        <h2> Hey there! I'm James.</h2>
      </header>
      <section>
        <Text>
          Exploring new technologies and developing software solutions.
        </Text>
      </section>
      <section>
        <Text>
          Higher Technician in Multi-platform Applications Development.
        </Text>
      </section>
      <section>
        <Text>
          Currently working as FrontEnd developer in [ArteRevelo](https://arterevelo.com).
        </Text>
      </section>
      <section>
        <Text>
          Developing React apps and acquiring proficiency with TypeScript.
        </Text>
      </section>
      <section>
        <Text>
          Pursuing 3D Modeling and Video editing as hobbies/side hustles.
        </Text>
      </section>
      <section>
        <ul>
          <li>
            <Badge icon="python">Python</Badge>
          </li>
          <li>
            <Badge icon="java">Java</Badge>
          </li>
          <li>
            <Badge icon="html5">HTML5</Badge>
          </li>
          <li>
            <Badge icon="css3">CSS3</Badge>
          </li>
          <li>
            <Badge icon="javascript">JavaScript</Badge>
          </li>
          <li>
            <Badge icon="typescript">TypeScript</Badge>
          </li>
          <li>
            <Badge icon="react">React</Badge>
          </li>
          <li>
            <Badge icon="node.js">Node.js</Badge>
          </li>
          <li>
            <Badge icon="mysql">MySQL</Badge>
          </li>
          <li>
            <Badge icon="mongodb">MongoDB</Badge>
          </li>
          <li>
            <Badge icon="git">Git</Badge>
          </li>
          <li>
            <Badge icon="github">GitHub</Badge>
          </li>
          <li>
            <Badge icon="visual-studio-code">Visual Studio Code</Badge>
          </li>
          <li>
            <Badge icon="premiere">Adobe Premiere Pro</Badge>
          </li>
          <li>
            <Badge icon="after-effects">Adobe After Effects</Badge>
          </li>
          <li>
            <Badge icon="photoshop">Photoshop</Badge>
          </li>
          <li>
            <Badge icon="blender">Blender</Badge>
          </li>
        </ul>
      </section>
      <section>
        <ul>
          <li>
            <Link href="https://www.linkedin.com/in/jamextrudeau/">
              <Badge icon="linkedin">LinkedIn</Badge>
            </Link>
          </li>
          <li>
            <Link href="mailto:alex.trudeau@engineer.com">
              <Badge icon="email">Email</Badge>
            </Link>
          </li>
        </ul>
      </section>
    </main>
  );
}

export default withClient({
  AboutMe,
});
