import { writable } from 'svelte/store';
import { english } from './lib/assets/languages/english';

export const language = writable(english);
