'use client';

import { LinkProps } from '@/src/common-types';
import { Container } from '@/src/components/container';
import { BrandLogo } from '../../../brand-logo';
import { useStickyHeader } from '../../utils/use-sticky-header';
import { cn } from '@/src/utils/shadcn';
import { Navigation } from '../common/navigation';
import {
  FaArrowRight,
  FaCartShopping,
  FaMagnifyingGlass,
} from 'react-icons/fa6';
import { Button } from '@/src/components/button';
import { CustomLink } from '@/src/components/custom-link';
import { headerData } from '@/data/layout/header/v2';
import { CSSTransition } from 'react-transition-group';
import styles from './header.module.css';
import { useState } from 'react';
import { SearchModal } from './search-modal';
import { OffCanvas } from './off-canvas';

interface SubMenu {
  title: string;
  subMenuItems: LinkProps[];
}

export interface HeaderProps {
  contactInfo: {
    phone: string;
    mail: string;
    address: string;
  };
  ctaBtn: LinkProps;
  menuItems: (LinkProps | SubMenu)[];
}

const actionIconClasses = cn(
  'text-[1.2rem] cursor-pointer text-accent-900 transition-colors duration-300 hover:text-primary dark:text-white'
);

export function Header() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const isSticky = useStickyHeader(700);
  const { ctaBtn, menuItems } = headerData;

  return (
    <>
      <header
        className={cn(
          'left-0 right-0 top-0 z-99 hidden w-full transition-all duration-300 lg:block',
          isSticky
            ? 'fixed animate-fadeInDown bg-white py-4 shadow-lg dark:bg-accent-700'
            : 'absolute bg-white/90 py-4 backdrop-blur-md'
        )}
      >
        <Container>
          <div className="flex items-center justify-between gap-8">
            {/* 1. Brand Logo (Left) */}
            <div className="flex-none">
              <BrandLogo />
            </div>

            {/* 2. Navigation (Center - Flex Grow) */}
            <div className="flex flex-grow justify-center">
              {menuItems && menuItems.length > 0 && (
                <Navigation menuItems={menuItems} />
              )}
            </div>

            {/* 3. Actions & CTA (Right) */}
            <div className="flex flex-none items-center gap-6">
              <ul className="flex items-center gap-6">
                <li>
                  <button
                    aria-label="Search"
                    className={actionIconClasses}
                    onClick={() => setIsModalOpen(true)}
                  >
                    <FaMagnifyingGlass />
                  </button>
                </li>
                <li>
                  
                </li>
                <li>
                  <OffCanvas />
                </li>
              </ul>

              {/* Pill-Shaped Button matching Zammy Zaif */}
              <Button
                asChild
                className={cn('rounded-full px-8 py-6 shadow-md')}
              >
                <CustomLink href={ctaBtn.href} openNewTab={ctaBtn.openNewTab}>
                  <span className="relative z-1 mr-2">{ctaBtn.label}</span>
                  <FaArrowRight className="relative z-1 text-xs" />
                </CustomLink>
              </Button>
            </div>
          </div>
        </Container>
      </header>

      <CSSTransition
        in={isModalOpen}
        timeout={500}
        classNames={{
          enter: styles['modal-enter'],
          enterActive: styles['modal-enter-active'],
          exitActive: styles['modal-exit-active'],
        }}
        unmountOnExit
      >
        <SearchModal setIsModalOpen={setIsModalOpen} />
      </CSSTransition>
    </>
  );
}
