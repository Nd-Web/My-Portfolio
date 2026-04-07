import { ImageResponse } from 'next/og';

// Route segment config
export const runtime = 'edge';

// Image metadata
export const alt = 'Ndubuisi - Backend Engineer & AI Developer';
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = 'image/png';

// Image generation
export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#0a0a0a',
          backgroundImage: 'linear-gradient(to bottom right, #1a1a2e, #0a0a0a, #0f0f23)',
        }}
      >
        {/* Background gradient orbs */}
        <div
          style={{
            position: 'absolute',
            width: '400px',
            height: '400px',
            borderRadius: '50%',
            background: 'linear-gradient(135deg, #a855f7, #3b82f6)',
            opacity: 0.2,
            filter: 'blur(100px)',
            top: '10%',
            left: '10%',
          }}
        />
        <div
          style={{
            position: 'absolute',
            width: '400px',
            height: '400px',
            borderRadius: '50%',
            background: 'linear-gradient(135deg, #3b82f6, #06b6d4)',
            opacity: 0.2,
            filter: 'blur(100px)',
            bottom: '10%',
            right: '10%',
          }}
        />

        {/* Content */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 1,
          }}
        >
          {/* Name */}
          <div
            style={{
              fontSize: '80px',
              fontWeight: 'bold',
              background: 'linear-gradient(135deg, #a855f7, #3b82f6, #06b6d4)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              marginBottom: '20px',
            }}
          >
            Ndubuisi
          </div>

          {/* Title */}
          <div
            style={{
              fontSize: '32px',
              color: '#ffffff',
              marginBottom: '40px',
              textAlign: 'center',
            }}
          >
            Backend Engineer | AI Developer
          </div>

          {/* Tagline */}
          <div
            style={{
              fontSize: '24px',
              color: '#9ca3af',
              textAlign: 'center',
              maxWidth: '800px',
              lineHeight: 1.5,
            }}
          >
            I build real-time systems, AI-powered apps, and scalable backend
            solutions.
          </div>

          {/* Decorative line */}
          <div
            style={{
              width: '200px',
              height: '4px',
              background: 'linear-gradient(90deg, #a855f7, #3b82f6, #06b6d4)',
              borderRadius: '2px',
              marginTop: '40px',
            }}
          />
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
