import React from 'react';
import ButtonPreview from '../previews/ButtonPreview';
import CodePreview from '../previews/CodePreview';
import Settings from '../settings/Settings';

export const Main = () => {
  return (
    <main>
      <section>
        <ButtonPreview />
        <CodePreview />
      </section>
      <aside>
        <Settings />
      </aside>
    </main>
  );
};

export default Main;
