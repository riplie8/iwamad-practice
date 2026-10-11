type FooterProps = {
    year: string;
  };
  
  export default function Footer({ year }: FooterProps) {
    return (
      <footer className="p-4 text-center text-gray-500 text-sm">
        <p>&copy; {year} Akhmet Sultan</p>
      </footer>
    );
  }