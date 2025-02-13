import { Layout } from 'antd'

export default function AppContent() {
    return (
        <Layout.Content style={contentStyle}>Content</Layout.Content>
    )
}

const contentStyle = {
    textAlign: 'center',
    minHeight: 'calc(100vh - 60px',
    color: '#fff',
    backgroundColor: '#3c419b',
  };