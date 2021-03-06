import React, {useEffect} from 'react';
import ReactMarkdown from 'react-markdown';
import styled from 'styled-components';
import Navigation from '../Wallet_zh/Navigation';
import FooterSection from '../Wallet_zh/FooterSection';
import Container from 'react-bulma-components/lib/components/container';
import './Legal.scss';

const RisksPage = ({isChinese}) => {
  const risksFile = isChinese ? 'risks_zh.md' : 'risks_en.md';

  const [markdown, updateMarkdown] = React.useState('');

  React.useEffect(function effectFunction() {
    fetch('/markdown/legal/' + risksFile)
        .then((response) => response.text())
        .then((content) => {
          updateMarkdown(content);
        });
  }, []);

  return (
    <Container className="legal markdown has-text-black">
      <ReactMarkdown children={markdown} />
    </Container>
  );
};

export default RisksPage;
