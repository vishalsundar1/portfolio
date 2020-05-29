import React from 'react';
import Layout from '../../components/Layout';
import { SectionTitle, Pill } from '../../styles';
import { TestLinkItem, TestLinkTitle, TestLinkContainer} from './styles';

const TestLink = ({ user }) => {
    return (
        <Layout user={ user }>
            <div>
                <TestLinkTitle> TestLink </TestLinkTitle>
                
            </div>
        </Layout>
    );
};

export default TestLink;