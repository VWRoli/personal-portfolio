import { writable } from 'svelte/store';
import { english } from './assets/languages/english';

export const language = writable(english);
