import { clone, sum as lodash_sum } from 'lodash-es';
/**
 * 聚合
 * @param a
 * @param b
 */
export const sum = (a: number, b: number): number => lodash_sum([a, b]);
