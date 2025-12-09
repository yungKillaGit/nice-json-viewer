export const initialJson = {
  user: {
    id: 42,
    name: 'John Doe',
    email: 'john.doe@example.com',
    isActive: true,
    roles: ['admin', 'editor'],
    profile: {
      avatar: 'https://randomuser.me/api/portraits/men/42.jpg',
      bio: 'Frontend developer. Loves React, TypeScript, and clean UI design.',
      location: {
        city: 'San Francisco',
        country: 'USA',
      },
    },
  },
  settings: {
    theme: 'dark',
    notifications: {
      email: true,
      sms: false,
      push: true,
    },
    language: 'en-US',
  },
  projects: [
    {
      id: 101,
      name: 'Nice JSON Viewer',
      status: 'active',
      tags: ['json', 'react', 'nextjs'],
      contributors: [
        { name: 'John Doe', role: 'Lead' },
        { name: 'Jane Smith', role: 'Contributor' },
      ],
    },
    {
      id: 102,
      name: 'Open Source Docs',
      status: 'archived',
      tags: ['docs', 'community'],
    },
  ],
  lastLogin: '2025-12-09T10:15:00Z',
};
