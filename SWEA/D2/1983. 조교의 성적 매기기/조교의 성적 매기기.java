import java.util.Arrays;
import java.util.Collections;
import java.util.Scanner;

public class Solution {

	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		int T = sc.nextInt();
		String[] score = {"A+", "A0", "A-", "B+", "B0", "B-", "C+", "C0", "C-", "D0"};
		for(int tc=1;tc<=T;tc++) {
			int N = sc.nextInt();
			int K = sc.nextInt();
			double findScore = 0.0;
			Double[] total = new Double[N];
			for(int i=0;i<N;i++) {
				int t1 = sc.nextInt();
				int t2 = sc.nextInt();
				int t3 = sc.nextInt();
				double sum = t1 * 0.35 + t2 * 0.45 + t3 * 0.20;
				total[i] = sum;
				if(i+1 == K) findScore = sum;
			}
			Arrays.sort(total, Collections.reverseOrder());
			
			int idx = 0;
			for(int i=0;i<total.length;i++) {
				if(total[i] == findScore) {
					idx = i;
				}
			}
			idx /= (N/10);
			System.out.printf("#%d %s\n", tc, score[idx]);
		}
	}
}